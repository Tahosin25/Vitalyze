import { useEffect, useRef } from 'react'
import { ArrowRight, X } from 'lucide-react'
import { images } from '../data/images'
import Button from './Button'
import SmartImage from './SmartImage'

export default function VideoModal({ open, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.setTimeout(() => closeRef.current?.focus(), 50)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 px-5 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
        className="relative w-full max-w-lg overflow-hidden rounded-[2rem] bg-ink text-white shadow-2xl"
      >
        <div className="relative h-52 sm:h-60">
          <SmartImage
            src={images.videoPoster}
            alt="Member training in a gym"
            className="h-full w-full object-cover object-[50%_25%] opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close video"
          >
            <X size={17} />
          </button>
        </div>

        <div className="relative p-6 sm:p-8">
          <p className="eyebrow">Member stories</p>
          <h2 id="video-modal-title" className="display mt-3 text-3xl sm:text-4xl">
            Every transformation starts with one session.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Our full member-film library is part of the VITALYZE experience. Start your free
            trial and meet the people who decided strong was worth it.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/signup" onClick={onClose}>
              Start Free Trial
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white/70 transition hover:text-white"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
