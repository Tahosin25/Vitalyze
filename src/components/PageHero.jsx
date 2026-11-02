import SmartImage from './SmartImage'

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = '',
  imageClass = 'object-center',
  children,
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/5">
      <div className="container-page grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="display mt-4 text-5xl text-ink sm:text-6xl lg:text-7xl">{title}</h1>
          {description ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{description}</p>
          ) : null}
          {children ? <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div> : null}
        </div>

        {image ? (
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-[2.4rem] bg-mint/80 md:rotate-2"
              aria-hidden="true"
            />
            <SmartImage
              src={image}
              alt={imageAlt}
              loading="eager"
              className={`relative aspect-[5/4] w-full rounded-[2rem] object-cover ${imageClass}`}
            />
          </div>
        ) : null}
      </div>
    </section>
  )
}
