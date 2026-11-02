export default function Logo({ light = false, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
        <path
          d="M4 5h8.6L20 26.9 27.4 5H36L23.1 35h-6.2L4 5Z"
          fill={light ? '#F6F2E8' : '#16252F'}
        />
        <path
          d="M4 5h8.6l3.8 11.5L12.9 5H4Zm23.4 0H36L26.1 26.6l-3.6-10.9L27.4 5Z"
          fill="#43B3A6"
        />
      </svg>
      <span
        className={`text-[13px] font-semibold uppercase tracking-[0.3em] ${
          light ? 'text-cream' : 'text-ink'
        }`}
      >
        Vitalyze
      </span>
    </span>
  )
}
