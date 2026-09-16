import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Logo } from './Logo'
import { nav, society } from '../content'
import { publicUrl } from '../publicUrl'

export function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mesh min-h-screen text-fog">
      <header className="nav-blur sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Logo />
            <span className="leading-tight">
              <span className="block font-display text-sm font-bold tracking-wide text-white">
                {society.shortName}
              </span>
              <span className="hidden text-[11px] text-fog/70 sm:block">
                AI & Cybersecurity Research Society
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm transition ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-fog/75 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/membership"
            className="hidden rounded-full bg-mint px-4 py-2 text-sm font-semibold text-ink shadow-[0_0_24px_rgba(62,224,208,0.25)] lg:inline-flex"
          >
            Register
          </Link>

          <button
            type="button"
            className="rounded-lg border border-line px-3 py-2 text-sm text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>

        {open && (
          <div className="border-t border-line px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-fog hover:bg-white/5"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

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
              A non-profit scientific society for researchers, students, and industry professionals
              working in artificial intelligence, cybersecurity, and allied areas.
            </p>
            <p className="mt-6 font-serif text-2xl text-gold">{society.motto}</p>
            <p className="mt-1 text-base text-fog/55">{society.mottoMeaning}</p>
          </div>
          <div>
            <p className="kicker">Explore</p>
            <div className="mt-5 grid gap-3 text-lg text-fog/75">
              {nav.map((item) => (
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
      <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-32">
        <p className="kicker">{kicker}</p>
        <h1 className="headline mt-5 max-w-4xl text-5xl font-semibold text-white md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-fog/80">{subtitle}</p>
      </div>
    </section>
  )
}
