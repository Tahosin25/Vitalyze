import { images } from './images'

export const coaches = [
  {
    name: 'Marcus Hale',
    role: 'Strength & Hypertrophy',
    image: images.coachMarcus,
    credentials: 'CSCS · PN1',
    years: 12,
    bio: 'Former collegiate athlete turned strength coach. Marcus specializes in helping members build muscle with calm, repeatable programming.',
    specialties: ['Strength', 'Muscle gain', 'Powerlifting'],
  },
  {
    name: 'Nadia Brooks',
    role: 'Fat Loss & Conditioning',
    image: images.coachNadia,
    credentials: 'NASM CPT · FMS',
    years: 9,
    bio: 'Nadia blends metabolic conditioning with sustainable habits so members can lose fat without losing their social life.',
    specialties: ['Fat loss', 'Conditioning', 'Habit change'],
  },
  {
    name: 'Elena Rossi',
    role: 'Yoga & Mobility',
    image: images.coachElena,
    credentials: 'RYT-500',
    years: 11,
    bio: 'Elena teaches movement as a skill. Her sessions mix mobility, breath work, and strength to keep members training pain-free.',
    specialties: ['Yoga', 'Mobility', 'Recovery'],
  },
]

export const coachingSteps = [
  {
    number: '01',
    title: 'Assess',
    text: 'A short movement screen and lifestyle review gives us a clear starting point for training, nutrition, and recovery.',
  },
  {
    number: '02',
    title: 'Plan',
    text: 'Your coach builds a weekly plan around your schedule, equipment, and goals, then adjusts it as your life changes.',
  },
  {
    number: '03',
    title: 'Progress',
    text: 'Weekly check-ins, video feedback, and measurable targets keep the plan honest and your momentum steady.',
  },
]
