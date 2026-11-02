import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  ClipboardCheck,
  MessageSquare,
  Quote,
  Star,
  Users,
  Video,
} from 'lucide-react'
import Button from '../components/Button'
import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import { coaches, coachingSteps } from '../data/coaches'
import { avatar, images } from '../data/images'

const included = [
  {
    icon: CalendarCheck,
    title: 'Weekly check-ins',
    text: 'A short, focused review of training, nutrition, and recovery every week.',
  },
  {
    icon: Video,
    title: 'Form reviews',
    text: 'Send a lift, get clear cues. We fix technique before it becomes a problem.',
  },
  {
    icon: MessageSquare,
    title: 'Direct messaging',
    text: 'Questions between sessions are welcome. Your coach is one message away.',
  },
  {
    icon: ClipboardCheck,
    title: 'Plan adjustments',
    text: 'Travel, illness, busy weeks — your plan adapts without losing momentum.',
  },
]

export default function Coaching() {
  return (
    <>
      <PageHero
        eyebrow="Coaching"
        title={
          <>
            Better with a <span className="text-teal">coach.</span>
          </>
        }
        description="Certified coaches who know your name, your goals, and your schedule. Real accountability without the pressure or the noise."
        image={images.coaching}
        imageAlt="Coach guiding a member through a strength session"
        imageClass="object-[50%_40%]"
      >
        <Button to="/signup" size="lg">
          Start Free Trial
          <ArrowRight size={17} aria-hidden="true" />
        </Button>
        <Button href="#coaches" size="lg" variant="outline">
          Meet the coaches
        </Button>
      </PageHero>

      <section className="container-page pt-16 lg:pt-20">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">
            Three steps. One steady plan.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Coaching starts with listening. From there, we build something you can repeat on your
            best weeks and fall back on during the hard ones.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {coachingSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80} className="h-full">
              <div className="relative h-full overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-ink/5">
                <span className="display text-6xl text-mint" aria-hidden="true">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="coaches" className="container-page scroll-mt-24 pt-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">The team</p>
            <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">Meet your coaches</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Every VITALYZE coach is certified, experienced, and matched to your goals.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach, index) => (
            <Reveal key={coach.name} delay={index * 80} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5">
                <div className="relative overflow-hidden">
                  <SmartImage
                    src={coach.image}
                    alt={coach.name}
                    className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-cream/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink backdrop-blur">
                    <BadgeCheck size={12} className="text-teal" aria-hidden="true" />
                    {coach.credentials}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{coach.name}</h3>
                      <p className="mt-0.5 text-xs font-medium text-teal">{coach.role}</p>
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-mint-soft px-2.5 py-1 text-[10px] font-semibold text-ink/70">
                      <Star size={11} fill="currentColor" aria-hidden="true" />
                      {coach.years} yrs
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{coach.bio}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {coach.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="rounded-full border border-ink/10 px-2.5 py-1 text-[10px] font-medium text-ink/60"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pt-20">
        <Reveal>
          <div className="grid gap-8 rounded-[2rem] bg-mint/70 p-7 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <div>
              <p className="eyebrow">What is included</p>
              <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">
                Support that shows up every week.
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {included.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-teal">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold">{item.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-ink/60">{item.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <Button to="/pricing" className="mt-8">
                Compare coaching plans
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -left-3 -top-3 h-16 w-16 rounded-full border border-teal/40" aria-hidden="true" />
              <SmartImage
                src={images.groupClass}
                alt="Members training together in a coached session"
                className="relative aspect-[4/3] w-full rounded-[1.6rem] object-cover"
              />
              <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white p-3 pr-4 shadow-lg ring-1 ring-ink/5">
                <div className="flex -space-x-2" aria-hidden="true">
                  {[32, 12, 44].map((id) => (
                    <img
                      key={id}
                      src={avatar(id)}
                      alt=""
                      className="h-8 w-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold">Matched in 24 hours</p>
                  <p className="text-[10px] text-muted">Average coach response: 3 hrs</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-page pt-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink p-7 text-white sm:p-12">
            <Quote className="absolute right-8 top-8 h-24 w-24 text-white/5" aria-hidden="true" />
            <div className="relative max-w-3xl">
              <div className="flex gap-1 text-teal" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={15} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-6 text-2xl font-medium leading-snug sm:text-3xl">
                “My coach noticed I was training through fatigue and helped me do less, better. Six
                months later I am lifting more than I ever did on my own.”
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={avatar(32)}
                  alt="Maya R."
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">Maya R.</p>
                  <p className="text-xs text-white/50">VITALYZE member since 2024</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-page pt-20">
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink/10 bg-white p-7 sm:flex-row sm:items-center sm:p-9">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mint text-teal">
              <Users size={19} aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-xl font-semibold">Not sure who to train with?</h2>
              <p className="mt-1 text-sm text-muted">
                Take the two-minute coach match quiz after signing up. We will do the rest.
              </p>
            </div>
          </div>
          <Button to="/signup" className="shrink-0">
            Find my coach
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </Reveal>
      </section>

      <CtaBanner className="mt-20" />
    </>
  )
}
