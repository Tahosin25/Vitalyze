import { useState } from 'react'
import {
  ArrowRight,
  Check,
  CircleCheck,
  Mail,
  Minus,
  ShieldCheck,
  Users,
} from 'lucide-react'
import Button from '../components/Button'
import CtaBanner from '../components/CtaBanner'
import FaqItem from '../components/FaqItem'
import Reveal from '../components/Reveal'
import { faqs, guarantees, plans } from '../data/pricing'

const guaranteeIcons = [ShieldCheck, CircleCheck, Users]

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <section className="container-page pb-10 pt-14 text-center sm:pt-20">
        <p className="eyebrow">Pricing</p>
        <h1 className="display mx-auto mt-4 max-w-3xl text-5xl text-ink sm:text-6xl lg:text-7xl">
          Invest in <span className="text-teal">yourself.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
          Simple memberships, real coaches, and every program in the library. Start with a 7-day
          free trial and cancel whenever you need.
        </p>

        <div
          className="mt-8 inline-flex items-center gap-1 rounded-full border border-ink/10 bg-white p-1"
          role="group"
          aria-label="Billing period"
        >
          {[
            { value: 'monthly', label: 'Monthly' },
            { value: 'yearly', label: 'Annual' },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setBilling(option.value)}
              aria-pressed={billing === option.value}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition ${
                billing === option.value ? 'bg-ink text-white' : 'text-muted hover:text-ink'
              }`}
            >
              {option.label}
              {option.value === 'yearly' ? (
                <span
                  className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
                    billing === 'yearly' ? 'bg-teal text-white' : 'bg-mint text-ink/70'
                  }`}
                >
                  Save 20%
                </span>
              ) : null}
            </button>
          ))}
        </div>
      </section>

      <section className="container-page">
        <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, index) => {
            const price = billing === 'monthly' ? plan.monthly : plan.yearly
            const dark = plan.popular

            return (
              <Reveal key={plan.name} delay={index * 80} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-[2rem] p-7 ${
                    dark
                      ? 'bg-ink text-white shadow-[0_40px_80px_-40px_rgba(22,37,47,0.7)] lg:-my-3 lg:py-10'
                      : 'bg-white text-ink ring-1 ring-ink/5'
                  }`}
                >
                  {dark ? (
                    <span className="absolute right-7 top-7 rounded-full bg-teal px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white">
                      Most popular
                    </span>
                  ) : null}

                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">
                    {plan.name}
                  </p>
                  <p className={`mt-3 text-sm ${dark ? 'text-white/60' : 'text-muted'}`}>
                    {plan.tagline}
                  </p>

                  <div className="mt-6 flex items-end gap-1.5">
                    <span className="text-5xl font-semibold tracking-tight">${price}</span>
                    <span className={`pb-1.5 text-sm ${dark ? 'text-white/50' : 'text-muted'}`}>
                      /mo
                    </span>
                  </div>
                  <p className={`mt-1 text-[11px] ${dark ? 'text-white/40' : 'text-muted'}`}>
                    {billing === 'yearly'
                      ? `$${price * 12} billed annually`
                      : 'Billed monthly. Cancel anytime.'}
                  </p>

                  <Button
                    to="/signup"
                    variant={dark ? 'primary' : 'outline'}
                    size="lg"
                    className="mt-6 w-full"
                  >
                    {plan.cta}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Button>

                  <div className={`my-6 h-px ${dark ? 'bg-white/10' : 'bg-ink/10'}`} />

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Check
                          size={15}
                          className={`mt-0.5 shrink-0 ${dark ? 'text-teal' : 'text-teal'}`}
                          aria-hidden="true"
                        />
                        <span className={dark ? 'text-white/80' : 'text-ink/80'}>{feature}</span>
                      </li>
                    ))}
                    {plan.missing.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <Minus
                          size={15}
                          className={`mt-0.5 shrink-0 ${dark ? 'text-white/25' : 'text-ink/25'}`}
                          aria-hidden="true"
                        />
                        <span className={dark ? 'text-white/30' : 'text-muted/60'}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {dark ? (
                    <p className="mt-auto pt-6 text-[10px] text-white/40">
                      Includes a 7-day free trial
                    </p>
                  ) : null}
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-10 grid gap-4 rounded-3xl border border-ink/10 bg-white p-6 sm:grid-cols-3">
          {guarantees.map((item, index) => {
            const Icon = guaranteeIcons[index]
            return (
              <div key={item.title} className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mint text-teal">
                  <Icon size={16} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-0.5 text-xs text-muted">{item.text}</p>
                </div>
              </div>
            )
          })}
        </Reveal>
      </section>

      <section className="container-page pt-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Questions</p>
            <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">Good to know.</h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
              Everything about trials, switching plans, and what happens when life gets busy.
            </p>

            <div className="mt-7 rounded-3xl bg-mint/70 p-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-teal">
                <Mail size={17} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">Still deciding?</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/60">
                Talk to a real human on our member team. No pressure, no scripts.
              </p>
              <a
                href="mailto:hello@vitalyze.com"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-teal decoration-2 underline-offset-4"
              >
                hello@vitalyze.com
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-3xl bg-white px-6 ring-1 ring-ink/5 [&>div:last-child]:border-b-0">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={faq.question}
                  item={faq}
                  open={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner className="mt-20" />
    </>
  )
}
