export const plans = [
  {
    name: 'Starter',
    tagline: 'Everything you need to build the habit.',
    monthly: 29,
    yearly: 23,
    features: [
      'Full program library',
      'Basic progress tracking',
      'Community access',
      'Monthly nutrition guide',
    ],
    missing: ['1:1 coach check-ins', 'Custom meal plan'],
    cta: 'Start with Starter',
    popular: false,
  },
  {
    name: 'Pro',
    tagline: 'Coaching and structure for real momentum.',
    monthly: 59,
    yearly: 47,
    features: [
      'Everything in Starter',
      'Personal coach check-ins',
      'Custom calorie and macro targets',
      'Weekly progress reviews',
      'Priority support',
    ],
    missing: [],
    cta: 'Choose Pro',
    popular: true,
  },
  {
    name: 'Elite',
    tagline: 'Your highest level of accountability.',
    monthly: 99,
    yearly: 79,
    features: [
      'Everything in Pro',
      'Bi-weekly 1:1 coaching calls',
      'Fully custom training plan',
      'Video form reviews',
      'Direct message your coach',
      'Recovery and sleep protocol',
    ],
    missing: [],
    cta: 'Go Elite',
    popular: false,
  },
]

export const faqs = [
  {
    question: 'Can I cancel or pause my membership?',
    answer:
      'Yes. Memberships are month to month, and you can pause or cancel from your dashboard at any time. Annual plans can be paused for up to eight weeks per year.',
  },
  {
    question: 'Do I need a gym membership?',
    answer:
      'No. Every program includes equipment-free substitutions, and Home Strength is built entirely around dumbbells. If you train at a gym, most plans use standard equipment.',
  },
  {
    question: 'How does the free trial work?',
    answer:
      'You get seven days of full access to your chosen plan, including the program library and community. No charge until the trial ends, and you can cancel before then.',
  },
  {
    question: 'Can I switch programs?',
    answer:
      'Absolutely. You can switch programs between training blocks without changing your membership. Your coach can help you pick what comes next.',
  },
  {
    question: 'Is there nutrition coaching included?',
    answer:
      'Starter includes monthly nutrition guides. Pro and Elite include custom calorie and macro targets plus regular check-ins to keep them adjusted.',
  },
  {
    question: 'What if I am brand new to training?',
    answer:
      'Start with Fat Loss Blueprint, Muscle Foundations, or Yoga Flow Foundations. Each one teaches the basics with form cues and conservative progressions.',
  },
]

export const guarantees = [
  { title: '7-day free trial', text: 'Full access, cancel anytime.' },
  { title: 'No lock-in contracts', text: 'Stay because it works.' },
  { title: 'Real human coaches', text: 'Certified, not automated.' },
]
