import { ChevronDown } from 'lucide-react'

export default function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50"
      >
        <span className="text-[15px] font-semibold">{item.question}</span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition ${
            open ? 'border-teal bg-teal text-white' : 'border-ink/15 text-ink'
          }`}
          aria-hidden="true"
        >
          <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        </span>
      </button>
      {open ? <p className="pb-5 pr-10 text-sm leading-relaxed text-muted">{item.answer}</p> : null}
    </div>
  )
}
