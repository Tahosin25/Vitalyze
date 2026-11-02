import { ArrowRight, Quote, Star } from 'lucide-react'
import Button from '../components/Button'
import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import StatsBand from '../components/StatsBand'
import { images } from '../data/images'
import { testimonials, transformations } from '../data/testimonials'

export default function Success() {
  return (
    <>
      <PageHero
        eyebrow="Success stories"
        title={
          <>
            Real people. Real <span className="text-teal">results.</span>
          </>
        }
        description="No filters, no shortcuts. These are members who showed up, trusted the plan, and built a stronger relationship with training and food."
        image={images.womanPulldown}
        imageAlt="Member training with focus in the gym"
        imageClass="object-[50%_25%]"
      >
        <Button to="/signup" size="lg">
          Start your story
          <ArrowRight size={17} aria-hidden="true" />
        </Button>
        <Button to="/programs" size="lg" variant="outline">
          Explore programs
        </Button>
      </PageHero>

      <StatsBand className="mt-10" />

      <section className="container-page pt-16 lg:pt-20">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Transformations</p>
          <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">Progress looks good on you.</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Different goals, different starting points, one thing in common: consistency over
            perfection.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {transformations.map((item, index) => (
            <Reveal key={item.name} delay={index * 80} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5">
                <div className="relative overflow-hidden">
                  <SmartImage
                    src={item.image}
                    alt={item.name}
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-teal px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                    {item.result}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                      {item.goal}
                    </p>
                    <p className="mt-1 text-lg font-semibold">{item.name}</p>
                  </div>
                </div>
                <div className="flex flex-1 items-start gap-3 p-5">
                  <Quote size={18} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
                  <p className="text-sm italic leading-relaxed text-muted">{item.quote}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pt-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Member reviews</p>
            <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">
              150,000+ stories and counting.
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold ring-1 ring-ink/10">
            <span className="flex gap-0.5 text-teal" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((star) => (
                <Star key={star} size={12} fill="currentColor" />
              ))}
            </span>
            4.9 average rating
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={Math.min(index * 60, 240)} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl bg-white p-6 ring-1 ring-ink/5">
                <div className="flex gap-0.5 text-teal" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, star) => (
                    <Star key={star} size={13} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-ink/10 pt-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="truncate text-[11px] text-muted">
                      {testimonial.location} · {testimonial.result}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner className="mt-20" />
    </>
  )
}
