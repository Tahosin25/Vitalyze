import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Dumbbell,
  Heart,
  Play,
  TrendingUp,
  User,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import AvatarStack from '../components/AvatarStack'
import Button from '../components/Button'
import CtaBanner from '../components/CtaBanner'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import StatsBand from '../components/StatsBand'
import TodayProgressCard from '../components/TodayProgressCard'
import VideoModal from '../components/VideoModal'
import { images } from '../data/images'

const approach = [
  {
    icon: User,
    title: 'Personalized for You',
    text: 'Custom plans tailored to your body, goals, and lifestyle.',
  },
  {
    icon: Dumbbell,
    title: 'Expert Coaches',
    text: 'Learn from certified trainers who guide you every step.',
  },
  {
    icon: TrendingUp,
    title: 'Track & Improve',
    text: 'Smart tracking tools to monitor progress and stay motivated.',
  },
  {
    icon: Heart,
    title: 'Total Wellness',
    text: 'Fitness, nutrition, and mindset — balanced for a better you.',
  },
]

const paths = [
  {
    title: 'Fat Loss',
    category: 'Fat Loss',
    text: 'Burn fat and build lean muscle.',
    count: '12 Programs',
    image: images.fatLoss,
  },
  {
    title: 'Muscle Gain',
    category: 'Muscle Gain',
    text: 'Build strength and increase performance.',
    count: '14 Programs',
    image: images.muscle,
  },
  {
    title: 'Yoga & Mobility',
    category: 'Yoga & Mobility',
    text: 'Improve flexibility and reduce stress.',
    count: '10 Programs',
    image: images.yogaIndoor,
  },
  {
    title: 'Nutrition Plans',
    category: 'Nutrition',
    text: 'Eat smarter with custom meal plans.',
    count: '8 Programs',
    image: images.nutritionBowl,
  },
]

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="absolute -right-32 top-4 h-[540px] w-[540px] rounded-full bg-mint/60 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-page grid items-center gap-16 pb-24 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-4 lg:pb-28 lg:pt-12">
          <div className="relative z-10">
            <h1 className="display text-[clamp(3.6rem,9.6vw,7rem)] tracking-tight">
              <span className="block text-ink">Stronger</span>
              <span className="block text-teal">Every Day.</span>
            </h1>
            <p className="mt-7 max-w-md text-[17px] leading-relaxed text-muted">
              Personalized training. Smarter nutrition. Real results that last.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5">
              <Button
                to="/signup"
                variant="dark"
                size="lg"
                className="group pl-7 pr-2"
              >
                Start Your Journey
                <span className="ml-1 grid h-10 w-10 place-items-center rounded-full bg-teal transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={18} aria-hidden="true" />
                </span>
              </Button>

              <div className="flex items-center gap-3">
                <AvatarStack />
                <p className="text-xs leading-relaxed text-muted">
                  <span className="font-semibold text-ink">Join 150K+ members</span>
                  <br />
                  transforming their lives
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px]">
            <div
              className="absolute inset-x-4 bottom-6 top-8 rounded-[999px] bg-mint"
              aria-hidden="true"
            />
            <div
              className="absolute -left-3 top-24 hidden h-16 w-16 rounded-full border border-teal/40 sm:block"
              aria-hidden="true"
            />
            <div
              className="absolute -right-1 top-10 hidden h-3 w-3 rounded-full bg-teal sm:block"
              aria-hidden="true"
            />

            <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-t-full rounded-b-[2rem] ring-1 ring-ink/5 sm:w-[86%]">
              <SmartImage
                src={images.hero}
                alt="Member training with dumbbells in the gym"
                loading="eager"
                className="h-full w-full object-cover object-[50%_28%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
            </div>

            <TodayProgressCard className="relative z-10 mx-auto -mt-16 w-[88%] sm:absolute sm:-bottom-8 sm:right-0 sm:mt-0 sm:w-[262px]" />
          </div>
        </div>
      </section>

      <Reveal className="container-page">
        <div className="rounded-[2rem] bg-ink px-6 py-9 text-white sm:px-10 sm:py-11">
          <p className="eyebrow text-teal">Our Approach</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {approach.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`lg:px-7 ${index > 0 ? 'lg:border-l lg:border-white/10' : 'lg:pl-0'} ${
                    index === approach.length - 1 ? 'lg:pr-0' : ''
                  }`}
                >
                  <Icon className="text-teal" size={26} strokeWidth={1.5} aria-hidden="true" />
                  <h2 className="mt-5 text-[17px] font-semibold leading-snug">{item.title}</h2>
                  <p className="mt-2 max-w-[220px] text-[13px] leading-relaxed text-white/55">
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </Reveal>

      <section className="container-page pt-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Choose your path</p>
            <div className="mt-3 h-[2px] w-12 rounded-full bg-teal" aria-hidden="true" />
          </div>
          <Button to="/programs" variant="outline" size="sm" className="mb-0.5">
            View all programs
            <ArrowUpRight size={14} aria-hidden="true" />
          </Button>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_1.55fr]">
          {paths.map((path, index) => (
            <Reveal key={path.title} delay={index * 60} className="h-full">
              <Link
                to={`/programs?category=${encodeURIComponent(path.category)}`}
                className="group flex h-full flex-col rounded-2xl bg-white p-2.5 ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(22,37,47,0.4)]"
              >
                <div className="overflow-hidden rounded-xl">
                  <SmartImage
                    src={path.image}
                    alt={path.title}
                    className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                  <h3 className="text-[15px] font-semibold">{path.title}</h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-muted">{path.text}</p>
                  <span className="mt-auto flex items-center gap-1 pt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors group-hover:text-teal">
                    {path.count}
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={280} className="h-full sm:col-span-2 lg:col-span-1">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group relative flex h-full min-h-[380px] w-full flex-col justify-end overflow-hidden rounded-2xl bg-ink p-6 text-left text-white"
              aria-label="Play member stories video"
            >
              <SmartImage
                src={images.videoPoster}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-[50%_22%] opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
              <span className="absolute right-6 top-1/2 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-lg transition duration-300 group-hover:scale-110">
                <Play size={20} className="ml-0.5" fill="currentColor" aria-hidden="true" />
              </span>
              <div className="relative">
                <h3 className="display text-[2rem] leading-[0.95] sm:text-[2.15rem]">
                  Strong Body.
                  <br />
                  Strong Mind.
                  <br />
                  <span className="text-teal">Better You.</span>
                </h3>
                <p className="mt-3 max-w-[210px] text-[11px] leading-relaxed text-white/65">
                  Watch how our members achieve their best.
                </p>
              </div>
            </button>
          </Reveal>
        </div>
      </section>

      <StatsBand className="mt-20" />

      <CtaBanner className="mt-8" />

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  )
}
