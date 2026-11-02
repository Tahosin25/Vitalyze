import { BadgeCheck, Dumbbell, Star, Users } from 'lucide-react'
import { stats } from '../data/testimonials'

const icons = [Users, BadgeCheck, Dumbbell, Star]

function Wave({ flip = false }) {
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={`block h-8 w-full sm:h-10 ${flip ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path
        d="M0,38 C180,60 360,8 540,20 C720,32 900,58 1080,44 C1260,30 1350,14 1440,26 L1440,60 L0,60 Z"
        fill="#D7EBE6"
      />
    </svg>
  )
}

export default function StatsBand({ className = '' }) {
  return (
    <section className={className} aria-label="Member results">
      <Wave />
      <div className="bg-mint">
        <div className="container-page grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:py-16 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = icons[index]
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center gap-3 text-center ${
                  index > 0 ? 'lg:border-l lg:border-ink/10' : ''
                }`}
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-teal/40 text-teal">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="display text-4xl text-ink sm:text-5xl">{stat.value}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted sm:text-xs">
                  {stat.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
      <Wave flip />
    </section>
  )
}
