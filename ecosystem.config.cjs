module.exports = {
  apps: [
    {
      name: 'gidis',
      cwd: __dirname,
      script: 'server/index.ts',
      interpreter: 'node',
      interpreter_args: '--import tsx',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
}
