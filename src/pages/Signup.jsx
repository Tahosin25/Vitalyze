import { useState } from 'react'
import { ArrowRight, Check, Eye, EyeOff } from 'lucide-react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import Button from '../components/Button'
import { useAuth } from '../context/AuthContext'
import { images } from '../data/images'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Signup() {
  const { user, signup } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [terms, setTerms] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})

  if (user) {
    return <Navigate to="/dashboard" replace />
  }

  const update = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }))
    if (errors[key]) setErrors((current) => ({ ...current, [key]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}

    if (form.name.trim().length < 2) {
      nextErrors.name = 'Tell us your name.'
    }
    if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (form.password.length < 8) {
      nextErrors.password = 'Use at least 8 characters.'
    }
    if (form.confirm !== form.password) {
      nextErrors.confirm = 'Passwords do not match.'
    }
    if (!terms) {
      nextErrors.terms = 'Please accept the terms to continue.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    signup({ name: form.name.trim(), email: form.email.trim() })
    navigate('/dashboard', { replace: true })
  }

  return (
    <AuthLayout
      image={images.cta}
      imageAlt="Member running up stadium stairs"
      quote="The first week I just followed the plan. The second week I started believing I could keep going."
      author="Sofia L."
      meta="VITALYZE member · 9 months"
    >
      <div className="mx-auto w-full max-w-md">
        <p className="eyebrow">Start free</p>
        <h1 className="display mt-3 text-4xl text-ink sm:text-5xl">
          Your first week is <span className="text-teal">on us.</span>
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Create your account, pick a plan, and meet your coach. No credit card required.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
          <div>
            <label htmlFor="signup-name" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
              Full name
            </label>
            <input
              id="signup-name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={update('name')}
              aria-invalid={Boolean(errors.name)}
              placeholder="Alex Morgan"
              className="field"
            />
            {errors.name ? <p className="mt-1.5 text-xs text-red-600">{errors.name}</p> : null}
          </div>

          <div>
            <label htmlFor="signup-email" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
              Email
            </label>
            <input
              id="signup-email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={update('email')}
              aria-invalid={Boolean(errors.email)}
              placeholder="you@example.com"
              className="field"
            />
            {errors.email ? <p className="mt-1.5 text-xs text-red-600">{errors.email}</p> : null}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="signup-password" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                Password
              </label>
              <div className="relative">
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={form.password}
                  onChange={update('password')}
                  aria-invalid={Boolean(errors.password)}
                  placeholder="8+ characters"
                  className="field pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-muted transition hover:bg-ink/5 hover:text-ink"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password ? (
                <p className="mt-1.5 text-xs text-red-600">{errors.password}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="signup-confirm" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                Confirm
              </label>
              <input
                id="signup-confirm"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                value={form.confirm}
                onChange={update('confirm')}
                aria-invalid={Boolean(errors.confirm)}
                placeholder="Repeat password"
                className="field"
              />
              {errors.confirm ? (
                <p className="mt-1.5 text-xs text-red-600">{errors.confirm}</p>
              ) : null}
            </div>
          </div>

          <div>
            <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-muted">
              <input
                type="checkbox"
                checked={terms}
                onChange={(event) => {
                  setTerms(event.target.checked)
                  if (errors.terms) setErrors((current) => ({ ...current, terms: '' }))
                }}
                className="mt-0.5 h-4 w-4 rounded border-ink/25 accent-teal"
              />
              <span>
                I agree to the{' '}
                <Link to="/pricing" className="font-semibold text-ink underline decoration-teal underline-offset-2">
                  terms
                </Link>{' '}
                and{' '}
                <Link to="/pricing" className="font-semibold text-ink underline decoration-teal underline-offset-2">
                  privacy policy
                </Link>
                .
              </span>
            </label>
            {errors.terms ? <p className="mt-1.5 text-xs text-red-600">{errors.terms}</p> : null}
          </div>

          <Button type="submit" size="lg" className="w-full">
            Start my free week
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-muted">
          Already a member?{' '}
          <Link to="/login" className="font-semibold text-ink underline decoration-teal decoration-2 underline-offset-4">
            Log in
          </Link>
        </p>

        <ul className="mt-7 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] text-muted">
          {['No credit card required', 'Cancel anytime', 'Real coaches included'].map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <Check size={12} className="text-teal" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </AuthLayout>
  )
}
