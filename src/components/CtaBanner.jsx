import { ArrowRight } from 'lucide-react'
import { images } from '../data/images'
import Button from './Button'
import SmartImage from './SmartImage'

export default function CtaBanner({ image = images.cta, className = '' }) {
  return (
    <section className={`container-page ${className}`}>
      <div className="relative overflow-hidden rounded-[2rem] bg-ink text-white">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative z-10 px-6 py-14 sm:px-12 sm:py-20 lg:py-24">
            <p className="eyebrow">Ready when you are</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">
              Your transformation starts <span className="text-teal">today.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Take the first step toward a healthier, stronger, and happier you. Your first week is
              on us.
            </p>
            <Button to="/signup" size="lg" className="mt-8">
              Get Started Free
              <ArrowRight size={17} aria-hidden="true" />
            </Button>
            <div
              className="mt-10 hidden h-16 w-40 opacity-40 sm:block"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)',
                backgroundSize: '14px 14px',
              }}
              aria-hidden="true"
            />
          </div>

          <div className="relative hidden min-h-[360px] lg:block">
            <SmartImage
              src={image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
