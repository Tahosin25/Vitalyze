import { ArrowUpRight, CalendarDays, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import SmartImage from './SmartImage'

export default function ProgramCard({ program, imageClassName = 'aspect-[4/3]' }) {
  return (
    <Link
      to={`/programs/${program.slug}`}
      className="group card-surface flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(22,37,47,0.35)]"
    >
      <div className={`relative overflow-hidden ${imageClassName}`}>
        <SmartImage
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur">
          {program.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-snug">{program.title}</h3>
          <ArrowUpRight
            size={18}
            className="mt-0.5 shrink-0 text-teal transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{program.tagline}</p>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ink/10 pt-4 text-[11px] font-medium text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={13} aria-hidden="true" />
            {program.weeks} weeks
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={13} aria-hidden="true" />
            {program.frequency}
          </span>
          <span className="ml-auto text-sm font-semibold text-ink">
            ${program.price}
            <span className="text-[11px] font-normal text-muted">/mo</span>
          </span>
        </div>
      </div>
    </Link>
  )
}
