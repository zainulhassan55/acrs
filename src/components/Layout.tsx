import { Link, Outlet } from 'react-router-dom'
import { Logo } from './Logo'
import { Navbar } from './Navbar'
import { society } from '../content'
import { publicUrl } from '../publicUrl'

const footerLinks = [
  { to: '/about', label: 'About GIDIS' },
  { to: '/membership', label: 'Membership' },
  { to: '/chapters', label: 'Chapters' },
  { to: '/events/conferences', label: 'Conferences' },
  { to: '/recognition/fellows', label: 'Fellows' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  return (
    <div className="mesh min-h-screen text-fog">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-line bg-ink-2">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-16 w-16" />
              <p className="headline text-2xl font-semibold text-white">{society.fullTitle}</p>
            </div>
            <p className="mt-5 max-w-md text-lg leading-8 text-fog/75">
              An international professional institute advancing research, education, collaboration,
              and professional development in digital intelligence, cybersecurity, and related
              areas.
            </p>
          </div>
          <div>
            <p className="kicker">Explore</p>
            <div className="mt-5 grid gap-3 text-lg text-fog/75">
              {footerLinks.map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-mint">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="kicker">Contact us</p>
            <p className="mt-5 text-lg leading-8 text-fog/75">{society.address}</p>
            <p className="mt-4 text-xl text-mint">{society.emails[0]}</p>
          </div>
        </div>
        <div className="border-t border-line py-6 text-center text-sm text-fog/45">
          © {new Date().getFullYear()} {society.name}. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export function PageHero({
  kicker,
  title,
  subtitle,
  image,
}: {
  kicker: string
  title: string
  subtitle: string
  image?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {image ? (
        <>
          <img
            src={publicUrl(image)}
            alt=""
            className="hero-photo absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#06101c] from-0% via-[#06101c]/72 via-42% to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06101c]/75 via-transparent to-[#06101c]/20" />
        </>
      ) : (
        <div className="grid-fade pointer-events-none absolute inset-0 opacity-70" />
      )}
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28">
        <p className="kicker">{kicker}</p>
        <h1 className="headline mt-5 max-w-4xl text-4xl font-semibold text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-fog/80">{subtitle}</p>
      </div>
    </section>
  )
}
