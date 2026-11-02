import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

function InstagramIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10.5 9.5 4.5 2.5-4.5 2.5v-5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3-.04-1.3-.13-2.45-.13-2.4 0-4.05 1.47-4.05 4.17v2.33H7.5V13h2.7v8h3.3Z" />
    </svg>
  )
}

const columns = [
  {
    title: 'Explore',
    links: [
      { label: 'Programs', to: '/programs' },
      { label: 'Nutrition', to: '/nutrition' },
      { label: 'Coaching', to: '/coaching' },
      { label: 'Success stories', to: '/success' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', to: '/coaching' },
      { label: 'Our coaches', to: '/coaching' },
      { label: 'Careers', to: '/coaching' },
      { label: 'Press', to: '/success' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', to: '/pricing' },
      { label: 'Contact', to: '/coaching' },
      { label: 'Privacy', to: '/pricing' },
      { label: 'Terms', to: '/pricing' },
    ],
  },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
  { label: 'YouTube', href: 'https://youtube.com', icon: YoutubeIcon },
  { label: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
  }

  return (
    <footer className="mt-16 bg-ink text-white">
      <div className="container-page grid gap-12 py-14 lg:grid-cols-[1.15fr_1.85fr] lg:gap-16">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            Personalized training, smarter nutrition, and real coaching for people who want to get
            stronger every day.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 max-w-sm" noValidate>
            <label htmlFor="footer-email" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Get the weekly training note
            </label>
            <div className="mt-3 flex overflow-hidden rounded-full border border-white/15 bg-white/5 p-1 focus-within:border-teal/60">
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (status !== 'idle') setStatus('idle')
                }}
                placeholder="you@example.com"
                className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-white/35"
              />
              <button
                type="submit"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal text-white transition hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Subscribe to the newsletter"
              >
                <ArrowRight size={16} />
              </button>
            </div>
            <p
              className={`mt-2 min-h-[18px] text-xs ${
                status === 'error' ? 'text-red-300' : 'text-teal'
              }`}
              role="status"
            >
              {status === 'error' ? 'Enter a valid email address.' : null}
              {status === 'success' ? 'You are on the list. Welcome to VITALYZE.' : null}
            </p>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/70 transition hover:text-teal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-5 py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} VITALYZE. Train smart, live strong.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`VITALYZE on ${social.label}`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/60 transition hover:border-teal hover:text-teal"
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
