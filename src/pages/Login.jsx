import { useState } from 'react'
import { ArrowRight, Check, Eye, EyeOff } from 'lucide-react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import Button from '../components/Button'
import { useAuth } from '../context/AuthContext'
import { images } from '../data/images'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Login() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})

  const from = location.state?.from?.pathname || '/dashboard'

  if (user) {
    return <Navigate to={from} replace />
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}

    if (!emailPattern.test(email.trim())) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    login({ email: email.trim() })
    navigate(from, { replace: true })
  }

  const handleDemo = () => {
    login({ name: 'Alex Morgan', email: 'alex@vitalyze.com' })
    navigate('/dashboard', { replace: true })
  }

  return (
    <AuthLayout
      image={images.womanPulldown}
      imageAlt="Member training in the gym"
      quote="I stopped restarting every Monday. The plan and my coach made consistency feel simple."
      author="Maya R."
      meta="VITALYZE member · 14 months"
    >
      <div className="mx-auto w-full max-w-md">
        <p className="eyebrow">Welcome back</p>
        <h1 className="display mt-3 text-4xl text-ink sm:text-5xl">
          Pick up where you <span className="text-teal">left off.</span>
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Log in to see today&apos;s plan, progress, and notes from your coach.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
          <div>
            <label htmlFor="login-email" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
              Email
            </label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                if (errors.email) setErrors((current) => ({ ...current, email: '' }))
              }}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'login-email-error' : undefined}
              placeholder="you@example.com"
              className="field"
            />
            {errors.email ? (
              <p id="login-email-error" className="mt-1.5 text-xs text-red-600">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="login-password" className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                Password
              </label>
              <a
                href="mailto:hello@vitalyze.com?subject=Password%20reset"
                className="text-[11px] font-medium text-teal hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                  if (errors.password) setErrors((current) => ({ ...current, password: '' }))
                }}
                aria-invalid={Boolean(errors.password)}
                aria-describedby={errors.password ? 'login-password-error' : undefined}
                placeholder="At least 8 characters"
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
              <p id="login-password-error" className="mt-1.5 text-xs text-red-600">
                {errors.password}
              </p>
            ) : null}
          </div>

          <Button type="submit" size="lg" className="w-full">
            Log in
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted/70">
          <span className="h-px flex-1 bg-ink/10" />
          or
          <span className="h-px flex-1 bg-ink/10" />
        </div>

        <Button variant="outline" size="lg" className="w-full" onClick={handleDemo}>
          Try the demo account
        </Button>

        <p className="mt-7 text-center text-sm text-muted">
          New here?{' '}
          <Link to="/signup" className="font-semibold text-ink underline decoration-teal decoration-2 underline-offset-4">
            Start your free trial
          </Link>
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] text-muted">
          {['No credit card', 'Cancel anytime', '7 days free'].map((item) => (
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
