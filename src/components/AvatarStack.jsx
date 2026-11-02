import { avatar } from '../data/images'

const ids = [32, 12, 44, 47]

export default function AvatarStack({ className = '' }) {
  return (
    <div className={`flex -space-x-2.5 ${className}`} aria-hidden="true">
      {ids.map((id) => (
        <img
          key={id}
          src={avatar(id)}
          alt=""
          loading="lazy"
          className="h-9 w-9 rounded-full border-2 border-cream object-cover"
        />
      ))}
    </div>
  )
}
