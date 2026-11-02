import { images } from './images'

export const mealPlans = [
  {
    name: 'Balanced Performance',
    image: images.mealTofu,
    calories: 2100,
    protein: 140,
    tags: ['Balanced', 'Flexible'],
    meals: [
      { label: 'Breakfast', detail: 'Greek yogurt, berries & oats' },
      { label: 'Lunch', detail: 'Grilled chicken grain bowl' },
      { label: 'Dinner', detail: 'Salmon, rice & greens' },
      { label: 'Snack', detail: 'Apple with almond butter' },
    ],
  },
  {
    name: 'High Protein',
    image: images.mealSalmon,
    calories: 2400,
    protein: 190,
    tags: ['Muscle gain', 'High protein'],
    meals: [
      { label: 'Breakfast', detail: 'Egg white omelet & toast' },
      { label: 'Lunch', detail: 'Steak, potatoes & slaw' },
      { label: 'Dinner', detail: 'Seared salmon & quinoa' },
      { label: 'Snack', detail: 'Cottage cheese & pineapple' },
    ],
  },
  {
    name: 'Plant Powered',
    image: images.nutritionBowl,
    calories: 2000,
    protein: 120,
    tags: ['Plant based', 'High fiber'],
    meals: [
      { label: 'Breakfast', detail: 'Tofu scramble & sourdough' },
      { label: 'Lunch', detail: 'Chickpea crunch salad' },
      { label: 'Dinner', detail: 'Lentil curry & brown rice' },
      { label: 'Snack', detail: 'Hummus, veg & pita' },
    ],
  },
]
