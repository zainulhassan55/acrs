#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/gidis}"
DB_NAME=gidis
DB_USER=gidis
DB_PASS="${DB_PASS:-$(openssl rand -base64 18 | tr -dc 'A-Za-z0-9' | head -c 24)}"

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y curl git nginx postgresql postgresql-contrib ufw certbot python3-certbot-nginx

if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi

npm install -g pm2 tsx

sudo -u postgres psql -tc "SELECT 1 FROM pg_roles WHERE rolname='${DB_USER}'" | grep -q 1 || \
  sudo -u postgres psql -c "CREATE USER ${DB_USER} WITH PASSWORD '${DB_PASS}';"
sudo -u postgres psql -tc "SELECT 1 FROM pg_database WHERE datname='${DB_NAME}'" | grep -q 1 || \
  sudo -u postgres psql -c "CREATE DATABASE ${DB_NAME} OWNER ${DB_USER};"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE ${DB_NAME} TO ${DB_USER};"

mkdir -p "${APP_DIR}"
cd "${APP_DIR}"

if [ ! -f package.json ]; then
  echo "Copy the project into ${APP_DIR} first, then run this script again."
  echo "Generated Postgres password: ${DB_PASS}"
  exit 1
fi

cat > .env <<EOF
PORT=3000
DATABASE_URL="postgresql://${DB_USER}:${DB_PASS}@127.0.0.1:5432/${DB_NAME}?schema=public"
EOF

npm ci
npx prisma generate
npx prisma db push
npm run build

cp deploy/nginx-gidis.conf /etc/nginx/sites-available/gidis
ln -sfn /etc/nginx/sites-available/gidis /etc/nginx/sites-enabled/gidis
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

pm2 start ecosystem.config.cjs
pm2 save
pm2 startup systemd -u root --hp /root >/dev/null || true

ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

echo
echo "App directory: ${APP_DIR}"
echo "Database user: ${DB_USER}"
echo "Database password: ${DB_PASS}"
echo "Point DNS A records for gidis-edu.org and www.gidis-edu.org to this VPS IP."
echo "Then run: certbot --nginx -d gidis-edu.org -d www.gidis-edu.org"
echo
