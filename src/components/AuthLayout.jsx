import SmartImage from './SmartImage'

export default function AuthLayout({ image, imageAlt, quote, author, meta, children }) {
  return (
    <section className="container-page py-10 sm:py-14">
      <div className="grid overflow-hidden rounded-[2rem] bg-white ring-1 ring-ink/5 lg:grid-cols-2">
        <div className="relative hidden min-h-[660px] lg:block">
          <SmartImage
            src={image}
            alt={imageAlt}
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/5" />
          <div className="absolute inset-x-0 bottom-0 p-10 text-white">
            <p className="eyebrow text-teal">Member stories</p>
            <blockquote className="mt-4 max-w-md text-2xl font-medium leading-snug">
              “{quote}”
            </blockquote>
            <p className="mt-5 text-sm font-semibold">{author}</p>
            <p className="mt-1 text-xs text-white/50">{meta}</p>
          </div>
        </div>

        <div className="p-6 sm:p-10 lg:p-14">{children}</div>
      </div>
    </section>
  )
}
