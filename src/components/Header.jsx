import { useEffect, useState } from 'react'
import { LogOut, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { navLinks } from '../data/navigation'
import Button from './Button'
import Logo from './Logo'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  const initials = user?.name
    ? user.name
        .split(/\s+/)
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : ''

  const handleLogout = () => {
    logout()
    setOpen(false)
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/90 backdrop-blur-md">
      <div className="container-page flex h-[76px] items-center justify-between gap-6">
        <Link
          to="/"
          className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60"
          aria-label="VITALYZE home"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className="nav-link">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="hidden items-center gap-2 rounded-full border border-ink/10 py-1.5 pl-1.5 pr-4 text-sm font-semibold transition hover:border-ink/25 hover:bg-white sm:inline-flex"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-teal text-[11px] font-bold text-white">
                  {initials}
                </span>
                Dashboard
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink/70 transition hover:border-ink/25 hover:bg-white hover:text-ink"
                aria-label="Log out"
                title="Log out"
              >
                <LogOut size={16} />
              </button>
            </>
          ) : (
            <Button to="/signup" className="hidden sm:inline-flex">
              Start Free Trial
            </Button>
          )}

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink transition hover:bg-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="absolute inset-x-0 top-full h-[calc(100dvh-76px)] overflow-y-auto border-t border-ink/5 bg-cream lg:hidden">
          <div className="container-page flex flex-col py-6">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `display flex items-center justify-between border-b border-ink/10 py-4 text-3xl transition-colors ${
                    isActive ? 'text-teal' : 'text-ink hover:text-teal'
                  }`
                }
              >
                <span>{link.label}</span>
                <span className="font-sans text-[11px] font-medium tracking-normal text-muted">
                  0{index + 1}
                </span>
              </NavLink>
            ))}

            <div className="mt-7 flex flex-col gap-3">
              {user ? (
                <>
                  <Button to="/dashboard" size="lg" onClick={() => setOpen(false)}>
                    Go to Dashboard
                  </Button>
                  <Button variant="outline" size="lg" onClick={handleLogout}>
                    <LogOut size={16} aria-hidden="true" />
                    Log out
                  </Button>
                </>
              ) : (
                <Button to="/signup" size="lg" onClick={() => setOpen(false)}>
                  Start Free Trial
                </Button>
              )}
            </div>

            <p className="mt-6 text-xs text-muted">150K+ members · 4.9/5 member rating</p>
          </div>
        </div>
      ) : null}
    </header>
  )
}
