export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  children,
}) {
  const alignment =
    align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left'

  return (
    <div className={`${alignment} ${className}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">{title}</h2> : null}
      {description ? (
        <p className="mt-4 text-[15px] leading-relaxed text-muted">{description}</p>
      ) : null}
      {children}
    </div>
  )
}
