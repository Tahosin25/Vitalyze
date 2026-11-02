import { avatar, images } from './images'

export const stats = [
  { value: '150K+', label: 'Happy Members' },
  { value: '98%', label: 'Success Rate' },
  { value: '25M+', label: 'Workouts Completed' },
  { value: '4.9/5', label: 'Member Rating' },
]

export const testimonials = [
  {
    name: 'Maya R.',
    location: 'Austin, TX',
    avatar: avatar(32),
    rating: 5,
    quote:
      'I stopped chasing programs and started following a plan. Twelve weeks in, I am stronger than I have ever been and my knees finally feel good.',
    result: '-11 kg · Fat Loss Blueprint',
  },
  {
    name: 'Daniel K.',
    location: 'Chicago, IL',
    avatar: avatar(12),
    rating: 5,
    quote:
      'The coaching is the difference. My check-ins are short but specific, and every block builds on the last one.',
    result: '+8 kg lean mass · Hypertrophy Builder',
  },
  {
    name: 'Priya S.',
    location: 'Seattle, WA',
    avatar: avatar(45),
    rating: 5,
    quote:
      'I used to skip rest days and wonder why I was exhausted. The mobility program taught me that recovery is training too.',
    result: 'Pain-free training · Mobility & Recovery',
  },
  {
    name: 'Sofia L.',
    location: 'Miami, FL',
    avatar: avatar(47),
    rating: 5,
    quote:
      'The meal plans are realistic. Nothing is off limits, and I still hit my protein every day without thinking about it.',
    result: '-7 kg · Balanced Plate',
  },
  {
    name: 'James T.',
    location: 'Denver, CO',
    avatar: avatar(15),
    rating: 5,
    quote:
      'Fifteen years of gym experience and I still learned something in week one. The progression scheme is excellent.',
    result: '+15 kg squat · Muscle Foundations',
  },
  {
    name: 'Amara O.',
    location: 'Brooklyn, NY',
    avatar: avatar(44),
    rating: 5,
    quote:
      'The app keeps me honest. Seeing my streak grow and my coach respond to my notes makes showing up the easy part.',
    result: '52-week streak · VITALYZE Pro',
  },
]

export const transformations = [
  {
    name: 'Elena M.',
    goal: 'Fat loss & confidence',
    result: '-14 kg in 16 weeks',
    image: images.womanCrunch,
    quote:
      'I wanted to feel capable again. The plan gave me small wins every week, and the confidence came with them.',
  },
  {
    name: 'Chris B.',
    goal: 'Build muscle',
    result: '+10 kg lean mass',
    image: images.squat,
    quote:
      'I ate consistently, trained four days a week, and let the plan do the work. It is the first program I have finished.',
  },
  {
    name: 'Jordan A.',
    goal: 'Move without pain',
    result: 'Back to running in 9 weeks',
    image: images.yogaSunset,
    quote:
      'The mobility work fixed problems I had ignored for years. I am running again and actually enjoying it.',
  },
]
