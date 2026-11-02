import { Check, Droplets, Dumbbell, Footprints, Leaf } from 'lucide-react'
import ProgressRing from './ProgressRing'

export const baseMetrics = [
  { key: 'workout', icon: Dumbbell, label: 'Workout', value: '45 min', done: true },
  { key: 'nutrition', icon: Leaf, label: 'Nutrition', value: '1,600 kcal', done: true },
  { key: 'water', icon: Droplets, label: 'Water', value: '2.1 L', done: true },
  { key: 'steps', icon: Footprints, label: 'Steps', value: '8,342', done: false },
]

export default function TodayProgressCard({
  className = '',
  value = 78,
  metrics = baseMetrics,
  onToggle,
  interactive = false,
}) {
  return (
    <div
      className={`rounded-[1.75rem] bg-white p-5 ring-1 ring-ink/5 ${className}`}
      style={{ boxShadow: '0 24px 60px -28px rgba(22, 37, 47, 0.35)' }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Today&apos;s Progress</h3>
        <span className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-teal">
          <span className="h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
          Live
        </span>
      </div>

      <div className="mt-3 flex justify-center">
        <ProgressRing value={value} size={118} stroke={9} />
      </div>

      <ul className="mt-4 space-y-3">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <li key={metric.key} className="flex items-center gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mint-soft text-ink">
                <Icon size={15} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[12px] font-semibold leading-tight">
                  {metric.label}
                </span>
                <span className="block text-[11px] text-muted">{metric.value}</span>
              </span>
              {interactive ? (
                <button
                  type="button"
                  onClick={() => onToggle?.(metric.key)}
                  aria-pressed={metric.done}
                  aria-label={`${metric.done ? 'Mark incomplete' : 'Mark complete'}: ${metric.label}`}
                  className={`grid h-6 w-6 place-items-center rounded-full border transition ${
                    metric.done
                      ? 'border-teal bg-teal text-white'
                      : 'border-ink/15 bg-white text-transparent hover:border-teal/60'
                  }`}
                >
                  <Check size={13} strokeWidth={3} />
                </button>
              ) : (
                <span
                  className={`grid h-6 w-6 place-items-center rounded-full ${
                    metric.done ? 'bg-teal text-white' : 'bg-ink/10 text-ink/30'
                  }`}
                  aria-hidden="true"
                >
                  <Check size={13} strokeWidth={3} />
                </span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
