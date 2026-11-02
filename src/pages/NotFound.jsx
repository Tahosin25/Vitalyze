import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[65vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">Off the plan</p>
      <p className="display mt-4 text-7xl text-teal sm:text-8xl">404</p>
      <h1 className="display mt-4 text-4xl text-ink sm:text-5xl">This page skipped leg day.</h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        The page you are looking for does not exist or has moved. Let&apos;s get you back to
        something useful.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to="/">
          Back home
          <ArrowRight size={16} aria-hidden="true" />
        </Button>
        <Button to="/programs" variant="outline">
          Browse programs
        </Button>
      </div>
    </section>
  )
}
