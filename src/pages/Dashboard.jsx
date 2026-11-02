import { useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  Check,
  Dumbbell,
  Flame,
  Footprints,
  MessageSquare,
  Salad,
  Star,
  UtensilsCrossed,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import ProgressRing from '../components/ProgressRing'
import { baseMetrics } from '../components/TodayProgressCard'
import { useAuth } from '../context/AuthContext'
import { coaches } from '../data/coaches'

const weekly = [
  { day: 'Mon', minutes: 45 },
  { day: 'Tue', minutes: 30 },
  { day: 'Wed', minutes: 0 },
  { day: 'Thu', minutes: 40 },
  { day: 'Fri', minutes: 45 },
  { day: 'Sat', minutes: 25 },
  { day: 'Sun', minutes: 0 },
]

const todayIndex = (new Date().getDay() + 6) % 7

const workout = [
  { id: 'squat', name: 'Goblet Squat', detail: '4 sets × 10 reps', tag: 'Lower' },
  { id: 'press', name: 'Dumbbell Bench Press', detail: '4 sets × 8 reps', tag: 'Push' },
  { id: 'row', name: 'One-Arm Row', detail: '3 sets × 12 reps', tag: 'Pull' },
  { id: 'plank', name: 'Front Plank', detail: '3 sets × 45 sec', tag: 'Core' },
]

const macros = [
  { label: 'Protein', current: 118, target: 140 },
  { label: 'Carbs', current: 162, target: 220 },
  { label: 'Fat', current: 54, target: 65 },
]

const quickActions = [
  { label: 'Program library', to: '/programs', icon: Dumbbell },
  { label: 'Meal plans', to: '/nutrition', icon: Salad },
  { label: 'Message coach', to: '/coaching', icon: MessageSquare },
  { label: 'Member stories', to: '/success', icon: Star },
]

export default function Dashboard() {
  const { user } = useAuth()
  const [metrics, setMetrics] = useState(baseMetrics)
  const [completed, setCompleted] = useState([])
  const [joined, setJoined] = useState(false)

  const displayName = user.name
    .replace(/[._-]+/g, ' ')
    .replace(/\b\w/g, (character) => character.toUpperCase())

  const completedCount = metrics.filter((metric) => metric.done).length
  const progress = Math.round((completedCount / metrics.length) * 100)
  const allExercisesDone = completed.length === workout.length
  const workoutProgress = Math.round((completed.length / workout.length) * 100)

  const today = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(new Date())

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

  const maxMinutes = Math.max(60, ...weekly.map((day) => day.minutes))
  const totalMinutes = weekly.reduce((total, day) => total + day.minutes, 0)

  const toggleMetric = (key) => {
    setMetrics((current) =>
      current.map((metric) =>
        metric.key === key ? { ...metric, done: !metric.done } : metric,
      ),
    )
  }

  const toggleExercise = (id) => {
    setCompleted((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  const completeSession = () => {
    setCompleted(workout.map((exercise) => exercise.id))
    setMetrics((current) =>
      current.map((metric) => (metric.key === 'workout' ? { ...metric, done: true } : metric)),
    )
  }

  return (
    <section className="container-page py-10 lg:py-14">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="eyebrow">{today}</p>
          <h1 className="display mt-3 text-4xl text-ink sm:text-5xl">
            {greeting}, <span className="text-teal">{displayName.split(' ')[0]}.</span>
          </h1>
          <p className="mt-3 text-sm text-muted">
            You are {100 - progress}% away from a perfect day. Let&apos;s close the gap.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <Button to="/nutrition" variant="outline">
            Log meals
          </Button>
          <Button to="/programs">
            Browse programs
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { icon: Flame, label: 'Current streak', value: '12 days', meta: 'Personal best: 21' },
          { icon: Dumbbell, label: 'Sessions this week', value: '3 / 4', meta: '340 active minutes' },
          { icon: UtensilsCrossed, label: 'Calories', value: '1,600', meta: 'of 2,100 kcal' },
          { icon: Footprints, label: 'Steps', value: '8,342', meta: 'Goal: 10,000' },
        ].map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="rounded-2xl bg-white p-4 ring-1 ring-ink/5">
              <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                <Icon size={13} className="text-teal" aria-hidden="true" />
                {stat.label}
              </span>
              <p className="mt-2 text-xl font-semibold tracking-tight">{stat.value}</p>
              <p className="mt-0.5 text-[11px] text-muted">{stat.meta}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.55fr_1fr]">
        <div className="space-y-5">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">Today&apos;s progress</h2>
                <p className="mt-1 text-xs text-muted">
                  Tap a metric to check it off. Small wins compound.
                </p>
              </div>
              <span className="rounded-full bg-mint-soft px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/70">
                {completedCount} of {metrics.length} done
              </span>
            </div>

            <div className="mt-6 grid items-center gap-6 sm:grid-cols-[auto_1fr]">
              <div className="mx-auto sm:mx-0">
                <ProgressRing value={progress} size={156} stroke={12} />
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {metrics.map((metric) => {
                  const Icon = metric.icon
                  return (
                    <button
                      key={metric.key}
                      type="button"
                      onClick={() => toggleMetric(metric.key)}
                      aria-pressed={metric.done}
                      className={`flex items-center gap-3 rounded-2xl border p-3 text-left transition ${
                        metric.done
                          ? 'border-teal/30 bg-mint-soft/60'
                          : 'border-ink/10 bg-white hover:border-teal/40'
                      }`}
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-ink ring-1 ring-ink/5">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold">{metric.label}</span>
                        <span className="block text-[11px] text-muted">{metric.value}</span>
                      </span>
                      <span
                        className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                          metric.done
                            ? 'border-teal bg-teal text-white'
                            : 'border-ink/20 text-transparent'
                        }`}
                        aria-hidden="true"
                      >
                        <Check size={11} strokeWidth={3} />
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/5">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">Weekly activity</h2>
                <p className="mt-1 text-xs text-muted">Active minutes over the last seven days.</p>
              </div>
              <p className="text-xs text-muted">
                <strong className="text-sm font-semibold text-ink">{totalMinutes}</strong> min total
              </p>
            </div>

            <div className="mt-6 flex h-40 items-end justify-between gap-2 sm:gap-4">
              {weekly.map((day, index) => {
                const height = Math.max(4, Math.round((day.minutes / maxMinutes) * 100))
                const isToday = index === todayIndex
                return (
                  <div
                    key={day.day}
                    className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                  >
                    <span className={`text-[10px] ${isToday ? 'font-semibold text-ink' : 'text-muted'}`}>
                      {day.minutes > 0 ? day.minutes : ''}
                    </span>
                    <div
                      className={`w-full max-w-[38px] rounded-t-lg transition-all ${
                        isToday
                          ? 'bg-teal'
                          : day.minutes > 0
                            ? 'bg-teal/25 hover:bg-teal/40'
                            : 'bg-ink/10'
                      }`}
                      style={{ height: `${height}%` }}
                      aria-label={`${day.day}: ${day.minutes} active minutes`}
                      title={`${day.minutes} minutes`}
                    />
                    <span
                      className={`text-[10px] uppercase tracking-wide ${
                        isToday ? 'font-bold text-ink' : 'text-muted'
                      }`}
                    >
                      {day.day}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="eyebrow">Today&apos;s session</p>
                <h2 className="display mt-2 text-3xl text-ink">Lower body strength</h2>
                <p className="mt-1.5 text-xs text-muted">45 min · 4 exercises · Coach Marcus</p>
              </div>
              <span className="rounded-full bg-mint-soft px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/70">
                {workoutProgress}% done
              </span>
            </div>

            <div className="mt-5 space-y-2">
              {workout.map((exercise) => {
                const done = completed.includes(exercise.id)
                return (
                  <button
                    key={exercise.id}
                    type="button"
                    onClick={() => toggleExercise(exercise.id)}
                    aria-pressed={done}
                    className={`flex w-full items-center gap-3 rounded-2xl border p-3.5 text-left transition ${
                      done
                        ? 'border-teal/30 bg-mint-soft/60'
                        : 'border-ink/10 hover:border-teal/40'
                    }`}
                  >
                    <span
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border transition ${
                        done
                          ? 'border-teal bg-teal text-white'
                          : 'border-ink/20 text-transparent'
                      }`}
                      aria-hidden="true"
                    >
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={`block text-sm font-semibold ${done ? 'text-ink/60 line-through' : ''}`}>
                        {exercise.name}
                      </span>
                      <span className="block text-[11px] text-muted">{exercise.detail}</span>
                    </span>
                    <span className="rounded-full bg-cream px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-muted">
                      {exercise.tag}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[11px] text-muted">
                {allExercisesDone
                  ? 'Session logged. Nice work — recovery starts now.'
                  : 'Check off each exercise as you go.'}
              </p>
              <Button
                size="sm"
                variant={allExercisesDone ? 'outline' : 'primary'}
                onClick={completeSession}
                disabled={allExercisesDone}
              >
                {allExercisesDone ? 'Session complete' : 'Complete session'}
                <Check size={14} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Nutrition today</h2>
              <Link to="/nutrition" className="text-[11px] font-semibold text-teal hover:underline">
                Open plan
              </Link>
            </div>

            <div className="mt-5 flex items-end justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Calories
                </p>
                <p className="mt-1 text-3xl font-semibold tracking-tight">
                  1,600
                  <span className="ml-1 text-sm font-normal text-muted">/ 2,100</span>
                </p>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-full bg-mint-soft text-xs font-bold text-teal">
                76%
              </div>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-mint-soft">
              <div className="h-full w-[76%] rounded-full bg-teal" />
            </div>

            <div className="mt-5 space-y-3.5">
              {macros.map((macro) => {
                const percentage = Math.min(100, Math.round((macro.current / macro.target) * 100))
                return (
                  <div key={macro.label}>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-medium text-ink/70">{macro.label}</span>
                      <span className="text-muted">
                        {macro.current} / {macro.target}g
                      </span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-ink/10">
                      <div
                        className="h-full rounded-full bg-ink/40"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-ink p-6 text-white">
            <div
              className="absolute right-5 top-5 h-16 w-16 rounded-full border border-teal/30"
              aria-hidden="true"
            />
            <div className="flex items-center justify-between">
              <p className="eyebrow">Upcoming</p>
              <CalendarDays size={16} className="text-white/40" aria-hidden="true" />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <img
                src={coaches[2].image}
                alt={coaches[2].name}
                className="h-11 w-11 rounded-full object-cover object-top ring-2 ring-white/20"
              />
              <div>
                <p className="text-sm font-semibold">Mobility reset with Elena</p>
                <p className="mt-0.5 text-[11px] text-white/50">Thursday · 6:00 PM ET · 30 min</p>
              </div>
            </div>
            <Button
              variant="light"
              className="mt-5 w-full"
              onClick={() => setJoined(true)}
              disabled={joined}
            >
              {joined ? (
                <>
                  You&apos;re booked
                  <Check size={15} aria-hidden="true" />
                </>
              ) : (
                'Join live session'
              )}
            </Button>
          </div>

          <div className="rounded-3xl bg-white p-6 ring-1 ring-ink/5">
            <h2 className="text-lg font-semibold">Quick actions</h2>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {quickActions.map((action) => {
                const Icon = action.icon
                return (
                  <Link
                    key={action.label}
                    to={action.to}
                    className="group flex flex-col gap-2 rounded-2xl border border-ink/10 p-3.5 transition hover:border-teal/40 hover:bg-mint-soft/50"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-mint-soft text-teal transition group-hover:bg-white">
                      <Icon size={15} aria-hidden="true" />
                    </span>
                    <span className="text-[11px] font-semibold leading-tight">{action.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
