import { useState } from 'react'
import { Dumbbell } from 'lucide-react'

export default function SmartImage({
  src,
  alt = '',
  className = '',
  fallbackClassName = '',
  ...props
}) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-mint via-mint-soft to-sand ${className} ${fallbackClassName}`}
      >
        <Dumbbell className="h-8 w-8 text-ink/25" aria-hidden="true" />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={props.loading || 'lazy'}
      onError={() => setFailed(true)}
      className={className}
      {...props}
    />
  )
}
