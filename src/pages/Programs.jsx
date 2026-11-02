import { useMemo } from 'react'
import { ArrowRight } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import Button from '../components/Button'
import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import ProgramCard from '../components/ProgramCard'
import Reveal from '../components/Reveal'
import { images } from '../data/images'
import { categories, programs } from '../data/programs'

export default function Programs() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requested = searchParams.get('category')
  const active = categories.includes(requested) ? requested : 'All'

  const filtered = useMemo(
    () => (active === 'All' ? programs : programs.filter((program) => program.category === active)),
    [active],
  )

  const selectCategory = (category) => {
    if (category === 'All') {
      setSearchParams({})
      return
    }
    setSearchParams({ category })
  }

  return (
    <>
      <PageHero
        eyebrow="Programs"
        title={
          <>
            Find your <span className="text-teal">strong.</span>
          </>
        }
        description="Structured training and nutrition plans for every goal, every level, and every schedule. Pick a path and we will handle the details."
        image={images.battleRope}
        imageAlt="Athlete training with battle ropes"
        imageClass="object-[50%_35%]"
      >
        <Button to="/signup" size="lg">
          Start Free Trial
          <ArrowRight size={17} aria-hidden="true" />
        </Button>
        <Button to="/coaching" size="lg" variant="outline">
          Talk to a coach
        </Button>
      </PageHero>

      <section className="container-page pt-14">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Browse the library</p>
            <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">All programs</h2>
          </div>
          <p className="text-sm text-muted">
            <span className="font-semibold text-ink">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'program' : 'programs'} shown
          </p>
        </Reveal>

        <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter programs by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => selectCategory(category)}
              aria-pressed={active === category}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                active === category
                  ? 'bg-ink text-white'
                  : 'border border-ink/15 bg-transparent text-ink/70 hover:border-ink/30 hover:bg-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((program, index) => (
            <Reveal key={program.slug} delay={Math.min(index * 60, 240)} className="h-full">
              <ProgramCard program={program} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner className="mt-20" />
    </>
  )
}
