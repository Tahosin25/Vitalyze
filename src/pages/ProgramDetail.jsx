import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  Clock,
  ShieldCheck,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button'
import ProgramCard from '../components/ProgramCard'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import { getProgram, programs } from '../data/programs'

export default function ProgramDetail() {
  const { slug } = useParams()
  const program = getProgram(slug)

  if (!program) {
    return (
      <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="display text-7xl text-teal">404</p>
        <h1 className="display mt-4 text-4xl">Program not found</h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
          That program may have moved or finished its current block. Browse the full library to
          find your next plan.
        </p>
        <Button to="/programs" className="mt-8">
          Browse programs
          <ArrowRight size={16} aria-hidden="true" />
        </Button>
      </section>
    )
  }

  const related = programs
    .filter((item) => item.category === program.category && item.slug !== program.slug)
    .concat(programs.filter((item) => item.category !== program.category))
    .slice(0, 3)

  const stats = [
    { icon: Clock, label: 'Duration', value: `${program.weeks} weeks` },
    { icon: CalendarDays, label: 'Schedule', value: program.frequency },
    { icon: BarChart3, label: 'Level', value: program.level },
  ]

  return (
    <>
      <section className="border-b border-ink/5">
        <div className="container-page py-8 lg:py-14">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted transition hover:text-ink"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            All programs
          </Link>

          <div className="mt-7 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-mint px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink">
                  {program.category}
                </span>
                <span className="rounded-full border border-ink/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {program.level}
                </span>
              </div>

              <h1 className="display mt-5 text-5xl text-ink sm:text-6xl">{program.title}</h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
                {program.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                {stats.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="flex items-center gap-2.5">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-teal ring-1 ring-ink/10">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                          {stat.label}
                        </span>
                        <span className="block text-sm font-semibold">{stat.value}</span>
                      </span>
                    </div>
                  )
                })}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button to="/signup" size="lg">
                  Start this program
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
                <Button to="/coaching" size="lg" variant="outline">
                  Talk to a coach
                </Button>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-3 rounded-[2.4rem] bg-mint/80 md:rotate-2"
                aria-hidden="true"
              />
              <SmartImage
                src={program.image}
                alt={program.title}
                loading="eager"
                className="relative aspect-[5/4] w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-10 py-14 lg:grid-cols-[1.6fr_1fr] lg:gap-16 lg:py-20">
        <div>
          <Reveal>
            <p className="eyebrow">Inside the plan</p>
            <h2 className="display mt-3 text-4xl">About the program</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">{program.description}</p>
          </Reveal>

          <Reveal className="mt-10" delay={80}>
            <h3 className="text-lg font-semibold">What you will get</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {program.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-ink/5"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal text-white">
                    <Check size={13} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-10" delay={120}>
            <h3 className="text-lg font-semibold">A typical week</h3>
            <div className="mt-5 overflow-hidden rounded-2xl bg-white ring-1 ring-ink/5">
              {program.schedule.map((session, index) => (
                <div
                  key={`${session.day}-${session.focus}`}
                  className={`flex items-center gap-4 px-5 py-4 ${
                    index > 0 ? 'border-t border-ink/10' : ''
                  }`}
                >
                  <span className="grid h-10 w-12 shrink-0 place-items-center rounded-lg bg-mint-soft text-xs font-bold uppercase tracking-wide text-ink">
                    {session.day}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">{session.focus}</p>
                    <p className="mt-0.5 text-xs text-muted">{session.duration}</p>
                  </div>
                  <span className="hidden rounded-full bg-cream px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted sm:inline">
                    Guided
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-3 border-t border-ink/10 bg-cream/50 px-5 py-4 text-xs text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
                Recovery days include walking, mobility, and sleep targets.
              </div>
            </div>
          </Reveal>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Reveal className="rounded-3xl bg-white p-6 ring-1 ring-ink/5 lg:p-7" delay={100}>
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                Membership
              </span>
              <span className="text-sm font-semibold text-teal">7 days free</span>
            </div>
            <p className="mt-3 text-3xl font-semibold tracking-tight">
              ${program.price}
              <span className="text-sm font-normal text-muted">/mo</span>
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Program access is included with your membership. Cancel or switch programs anytime.
            </p>

            <div className="my-6 h-px bg-ink/10" />

            <ul className="space-y-3">
              {[
                'Full program and workout library',
                'Progress tracking and streaks',
                'Nutrition guidance and recipes',
                'Coach support in the community',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-ink/80">
                  <Check size={15} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button to="/signup" size="lg" className="mt-7 w-full">
              Start this program
              <ArrowRight size={16} aria-hidden="true" />
            </Button>

            <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-muted">
              <ShieldCheck size={13} aria-hidden="true" />
              No lock-in. Cancel anytime.
            </p>
          </Reveal>
        </aside>
      </section>

      <section className="container-page">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Keep exploring</p>
            <h2 className="display mt-3 text-4xl">You might also like</h2>
          </div>
          <Button to="/programs" variant="outline" size="sm">
            View all programs
          </Button>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item, index) => (
            <Reveal key={item.slug} delay={index * 60} className="h-full">
              <ProgramCard program={item} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
