import { useState } from 'react'
import {
  Apple,
  ArrowRight,
  Check,
  ChefHat,
  ClipboardList,
  HeartPulse,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import Button from '../components/Button'
import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import { images } from '../data/images'
import { mealPlans } from '../data/meals'

const features = [
  {
    icon: Apple,
    title: 'Real-food first',
    text: 'Flexible plans built around groceries you can find anywhere, not specialty products.',
  },
  {
    icon: ClipboardList,
    title: 'Clear targets',
    text: 'Calories and macros translated into simple portions, meals, and daily anchors.',
  },
  {
    icon: ChefHat,
    title: 'Quick recipes',
    text: 'Twenty-minute meals, batch-cook bases, and swaps for eating out or travelling.',
  },
  {
    icon: HeartPulse,
    title: 'Coach adjustments',
    text: 'Targets move with your training, recovery, and real life. No guesswork required.',
  },
]

const activityOptions = [
  { value: '1.2', label: 'Sedentary — desk job, little exercise' },
  { value: '1.375', label: 'Lightly active — 1–2 sessions a week' },
  { value: '1.55', label: 'Moderately active — 3–4 sessions a week' },
  { value: '1.725', label: 'Very active — 5–6 sessions a week' },
  { value: '1.9', label: 'Athlete — daily hard training' },
]

const initialForm = {
  weight: '75',
  height: '175',
  age: '30',
  sex: 'female',
  activity: '1.55',
  goal: 'lose',
}

export default function Nutrition() {
  const [form, setForm] = useState(initialForm)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const update = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }))
    if (error) setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const weight = Number(form.weight)
    const height = Number(form.height)
    const age = Number(form.age)

    if (
      !weight ||
      !height ||
      !age ||
      weight < 30 ||
      weight > 300 ||
      height < 100 ||
      height > 250 ||
      age < 13 ||
      age > 100
    ) {
      setError('Please enter realistic values: weight 30–300 kg, height 100–250 cm, age 13–100.')
      return
    }

    const bmr = 10 * weight + 6.25 * height - 5 * age + (form.sex === 'male' ? 5 : -161)
    const tdee = bmr * Number(form.activity)
    const multiplier = form.goal === 'lose' ? 0.85 : form.goal === 'gain' ? 1.1 : 1
    const calories = Math.round(tdee * multiplier)
    const protein = Math.round(weight * (form.goal === 'lose' ? 2.2 : 2))
    const fat = Math.round((calories * 0.27) / 9)
    const carbs = Math.max(0, Math.round((calories - protein * 4 - fat * 9) / 4))

    setResult({ calories, protein, carbs, fat })
    setError('')
  }

  return (
    <>
      <PageHero
        eyebrow="Nutrition"
        title={
          <>
            Fuel your <span className="text-teal">progress.</span>
          </>
        }
        description="No crash diets, no forbidden foods. Learn how to eat for energy, recovery, and the body you want — with targets that fit your actual life."
        image={images.mealTofu}
        imageAlt="Balanced bowl with colorful whole foods"
        imageClass="object-cover"
      >
        <Button href="#calculator" size="lg">
          Calculate your macros
          <ArrowRight size={17} aria-hidden="true" />
        </Button>
        <Button to="/signup" size="lg" variant="outline">
          Start Free Trial
        </Button>
      </PageHero>

      <section id="calculator" className="container-page scroll-mt-24 pt-16 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal>
            <p className="eyebrow">Macro calculator</p>
            <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">Your numbers, explained.</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Get a starting calorie target and a protein-forward macro split based on your body,
              activity, and goal. Use it as a baseline, then let your coach fine-tune from real
              results.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                'Uses the Mifflin–St Jeor equation',
                'Protein target scaled to bodyweight',
                'Adjusts for fat loss, maintenance, or muscle gain',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                  <Check size={15} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-mint/60 p-4 text-xs leading-relaxed text-ink/70">
              <Sparkles size={16} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
              Estimates are a starting point, not a diagnosis. Give any target two to three weeks
              of consistent data before changing it.
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-[2rem] bg-white p-6 ring-1 ring-ink/5 sm:p-8"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="calc-weight" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Weight (kg)
                  </label>
                  <input
                    id="calc-weight"
                    type="number"
                    inputMode="decimal"
                    min="30"
                    max="300"
                    value={form.weight}
                    onChange={update('weight')}
                    className="field"
                  />
                </div>
                <div>
                  <label htmlFor="calc-height" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Height (cm)
                  </label>
                  <input
                    id="calc-height"
                    type="number"
                    inputMode="decimal"
                    min="100"
                    max="250"
                    value={form.height}
                    onChange={update('height')}
                    className="field"
                  />
                </div>
                <div>
                  <label htmlFor="calc-age" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Age
                  </label>
                  <input
                    id="calc-age"
                    type="number"
                    inputMode="numeric"
                    min="13"
                    max="100"
                    value={form.age}
                    onChange={update('age')}
                    className="field"
                  />
                </div>
                <div>
                  <label htmlFor="calc-sex" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Biological sex
                  </label>
                  <select id="calc-sex" value={form.sex} onChange={update('sex')} className="field">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="calc-activity" className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Activity level
                  </label>
                  <select
                    id="calc-activity"
                    value={form.activity}
                    onChange={update('activity')}
                    className="field"
                  >
                    {activityOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Goal
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: 'lose', label: 'Lose fat' },
                      { value: 'maintain', label: 'Maintain' },
                      { value: 'gain', label: 'Build muscle' },
                    ].map((goal) => (
                      <button
                        key={goal.value}
                        type="button"
                        onClick={() => setForm((current) => ({ ...current, goal: goal.value }))}
                        aria-pressed={form.goal === goal.value}
                        className={`rounded-xl border px-2 py-2.5 text-xs font-semibold transition ${
                          form.goal === goal.value
                            ? 'border-teal bg-teal/10 text-ink'
                            : 'border-ink/15 text-muted hover:border-ink/30'
                        }`}
                      >
                        {goal.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {error ? (
                <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-xs text-red-700" role="alert">
                  {error}
                </p>
              ) : null}

              <Button type="submit" size="lg" className="mt-5 w-full">
                {result ? 'Recalculate my macros' : 'Calculate my macros'}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>

              {result ? (
                <div className="mt-6 rounded-2xl bg-cream p-4 sm:p-5">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      { label: 'Calories', value: result.calories, unit: 'kcal' },
                      { label: 'Protein', value: result.protein, unit: 'g' },
                      { label: 'Carbs', value: result.carbs, unit: 'g' },
                      { label: 'Fat', value: result.fat, unit: 'g' },
                    ].map((item) => (
                      <div key={item.label} className="rounded-xl bg-white p-3 text-center ring-1 ring-ink/5">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted">
                          {item.label}
                        </p>
                        <p className="mt-1.5 text-2xl font-semibold tracking-tight">
                          {item.value}
                          <span className="ml-0.5 text-[11px] font-normal text-muted">
                            {item.unit}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-center text-[10px] text-muted">
                    Estimated from the Mifflin–St Jeor equation and a{' '}
                    {form.goal === 'lose' ? '15% deficit' : form.goal === 'gain' ? '10% surplus' : 'maintenance intake'}.
                  </p>
                </div>
              ) : (
                <div className="mt-6 rounded-2xl border border-dashed border-ink/15 bg-cream/50 px-5 py-8 text-center">
                  <TrendingUp size={22} className="mx-auto text-teal" aria-hidden="true" />
                  <p className="mt-2 text-xs text-muted">
                    Your calorie and macro targets will appear here.
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <section id="plans" className="container-page scroll-mt-24 pt-20">
        <Reveal className="text-center">
          <p className="eyebrow">Meal plans</p>
          <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">Eat well, on repeat.</h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            Three starting points, each with simple meals, flexible portions, and a weekly grocery
            list. Swap meals freely — the structure stays.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {mealPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 80} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5">
                <SmartImage
                  src={plan.image}
                  alt={plan.name}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap gap-1.5">
                    {plan.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-mint-soft px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-ink/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{plan.name}</h3>
                  <div className="mt-2 flex gap-4 text-xs text-muted">
                    <span>
                      <strong className="font-semibold text-ink">{plan.calories}</strong> kcal
                    </span>
                    <span>
                      <strong className="font-semibold text-ink">{plan.protein}g</strong> protein
                    </span>
                  </div>

                  <ul className="mt-4 flex-1 space-y-2 border-t border-ink/10 pt-4">
                    {plan.meals.map((meal) => (
                      <li key={meal.label} className="flex gap-3 text-xs">
                        <span className="w-16 shrink-0 font-semibold text-ink/60">{meal.label}</span>
                        <span className="text-muted">{meal.detail}</span>
                      </li>
                    ))}
                  </ul>

                  <Button to="/signup" variant="outline" className="mt-5 w-full">
                    Start this plan
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pt-20">
        <Reveal>
          <p className="eyebrow">Nutrition that fits</p>
          <h2 className="display mt-3 max-w-xl text-4xl text-ink sm:text-5xl">
            Built for real schedules and real food.
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} delay={index * 60} className="h-full">
                <div className="h-full rounded-2xl bg-white p-5 ring-1 ring-ink/5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-mint text-teal">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{feature.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <CtaBanner className="mt-20" />
    </>
  )
}
