import { useEffect, useRef, useState } from 'react'

export default function ProgressRing({
  value = 78,
  size = 132,
  stroke = 10,
  label = true,
  className = '',
}) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return undefined
    const timer = window.setTimeout(() => setProgress(value), 150)
    return () => window.clearTimeout(timer)
  }, [visible, value])

  const offset = circumference - (progress / 100) * circumference

  return (
    <div
      ref={ref}
      className={`relative inline-grid place-items-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E3EFEA"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#43B3A6"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.1s cubic-bezier(0.2, 0.65, 0.3, 1)' }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="font-display text-[28px] leading-none text-ink">
          {Math.round(progress)}
          <span className="text-base">%</span>
        </div>
        {label ? (
          <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted">
            Completed
          </div>
        ) : null}
      </div>
      <span className="sr-only">{value} percent complete</span>
    </div>
  )
}
