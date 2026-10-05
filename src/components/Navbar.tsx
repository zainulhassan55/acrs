import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { menu, primaryMenuLabels, society, type MenuGroup } from '../content'

const primaryMenu = menu.filter((group) =>
  (primaryMenuLabels as readonly string[]).includes(group.label),
)
const moreMenu = menu.filter(
  (group) => !(primaryMenuLabels as readonly string[]).includes(group.label),
)

function groupActive(pathname: string, group: MenuGroup) {
  return group.items.some((item) => pathname === item.to || pathname.startsWith(`${item.to}/`))
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={`h-2.5 w-2.5 transition-transform ${open ? 'rotate-180' : ''}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M2.2 4.2 6 8l3.8-3.8L8.6 3 6 5.6 3.4 3z" />
    </svg>
  )
}

export function Navbar() {
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const closeTimer = useRef<number>(0)

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
    setMobileSection(null)
  }, [pathname])

  useEffect(() => {
    function onDoc(event: MouseEvent) {
      if (!navRef.current?.contains(event.target as Node)) setOpenMenu(null)
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  function openGroup(label: string) {
    window.clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }

  function scheduleClose() {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 180)
  }

  const itemClass = (active: boolean) =>
    `relative flex cursor-pointer items-center gap-1 px-2.5 py-2 text-[13px] font-semibold tracking-wide after:absolute after:right-2 after:bottom-0 after:left-2 after:h-[2px] after:rounded-full ${
      active
        ? 'text-mint after:bg-mint'
        : 'text-fog/80 after:bg-transparent hover:text-white hover:after:bg-white/30'
    }`

  const moreActive = moreMenu.some((group) => groupActive(pathname, group))

  function DropdownPanel({
    open,
    alignRight,
    children,
  }: {
    open: boolean
    alignRight?: boolean
    children: ReactNode
  }) {
    return (
      <div
        className={`absolute top-full z-[70] min-w-[240px] ${alignRight ? 'right-0' : 'left-0'} ${
          open ? 'pointer-events-auto visible opacity-100' : 'pointer-events-none invisible opacity-0'
        }`}
      >
        <div className="overflow-hidden rounded-b-xl border border-t-mint/40 border-line bg-[#0b1a2c] py-2 shadow-[0_20px_44px_rgba(0,0,0,0.5)]">
          {children}
        </div>
      </div>
    )
  }

  function MenuLinks({ group }: { group: MenuGroup }) {
    return (
      <>
        {group.items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block cursor-pointer px-5 py-2.5 text-[13px] ${
                isActive ? 'bg-white/10 text-mint' : 'text-fog/80 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </>
    )
  }

  return (
    <header ref={navRef} className="nav-blur sticky top-0 z-50 overflow-visible">
      <div className="grid w-full grid-cols-[1fr_auto] items-center px-5 py-2.5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:px-8">
        <Link
          to="/"
          className="flex min-w-0 cursor-pointer items-center gap-2.5 justify-self-start"
          onClick={() => setMobileOpen(false)}
        >
          <Logo className="h-10 w-10" />
          <span className="leading-tight">
            <span className="block font-display text-[14px] font-bold tracking-[0.14em] text-white">
              {society.shortName}
            </span>
            <span className="hidden max-w-[11rem] text-[10px] leading-snug text-fog/65 xl:block">
              Global Institute for Digital Intelligence and Security
            </span>
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => itemClass(isActive)}>
            Home
          </NavLink>
          {primaryMenu.map((group) => {
            const open = openMenu === group.label
            const active = groupActive(pathname, group)
            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => openGroup(group.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className={itemClass(open || active)}
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(open ? null : group.label)}
                >
                  {group.label}
                  <Chevron open={open} />
                </button>
                <DropdownPanel open={open}>
                  <MenuLinks group={group} />
                </DropdownPanel>
              </div>
            )
          })}

          <div
            className="relative"
            onMouseEnter={() => openGroup('More')}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              className={itemClass(openMenu === 'More' || moreActive)}
              aria-expanded={openMenu === 'More'}
              aria-haspopup="true"
              onClick={() => setOpenMenu(openMenu === 'More' ? null : 'More')}
            >
              More
              <Chevron open={openMenu === 'More'} />
            </button>
            <DropdownPanel open={openMenu === 'More'} alignRight>
              {moreMenu.map((group) => (
                <div key={group.label}>
                  <p className="px-5 pt-3 pb-1 text-[10px] font-bold tracking-[0.16em] text-mint uppercase">
                    {group.label}
                  </p>
                  <MenuLinks group={group} />
                </div>
              ))}
            </DropdownPanel>
          </div>
        </nav>

        <div className="hidden items-center justify-self-end gap-2 lg:flex">
          <Link
            to="/membership/apply"
            className="cursor-pointer rounded-full bg-mint px-4 py-2 text-[11px] font-bold tracking-[0.14em] text-ink uppercase"
          >
            Join GIDIS
          </Link>
          <Link
            to="/login"
            className="cursor-pointer rounded-full border border-white/20 px-4 py-2 text-[11px] font-bold tracking-[0.14em] text-white uppercase hover:border-mint/50 hover:text-mint"
          >
            Member login
          </Link>
        </div>

        <button
          type="button"
          className="cursor-pointer justify-self-end rounded-lg border border-line px-3 py-2 text-sm text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-line px-4 py-3 lg:hidden">
          <NavLink
            to="/"
            end
            onClick={() => setMobileOpen(false)}
            className="block cursor-pointer rounded-lg px-3 py-2.5 text-sm text-fog hover:bg-white/5 hover:text-white"
          >
            Home
          </NavLink>
          {menu.map((group) => {
            const expanded = mobileSection === group.label
            return (
              <div key={group.label} className="border-t border-white/10">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between px-3 py-3 text-left text-sm font-semibold text-white"
                  onClick={() => setMobileSection(expanded ? null : group.label)}
                  aria-expanded={expanded}
                >
                  {group.label}
                  <span className="text-mint">{expanded ? '−' : '+'}</span>
                </button>
                {expanded &&
                  group.items.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="block cursor-pointer px-5 py-2 text-sm text-fog/80 hover:text-white"
                    >
                      {item.label}
                    </NavLink>
                  ))}
              </div>
            )
          })}
          <div className="mt-3 grid gap-2">
            <Link
              to="/membership/apply"
              onClick={() => setMobileOpen(false)}
              className="cursor-pointer rounded-full bg-mint px-4 py-3 text-center text-sm font-semibold text-ink"
            >
              JOIN GIDIS
            </Link>
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="cursor-pointer rounded-full border border-line px-4 py-3 text-center text-sm font-semibold text-white"
            >
              MEMBER LOGIN
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
