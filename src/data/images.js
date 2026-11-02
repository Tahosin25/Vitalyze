const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

const p = (id, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

export const avatar = (id) => `https://i.pravatar.cc/120?img=${id}`

export const images = {
  hero: p(13197591, 1200),
  cta: u('photo-1538805060514-97d9cc17730c', 1400),
  videoPoster: u('photo-1611672585731-fa10603fb9e0', 1000),
  fatLoss: u('photo-1550345332-09e3ac987658', 900),
  muscle: u('photo-1581009146145-b5ef050c2e1e', 900),
  yogaIndoor: u('photo-1552196563-55cd4e45efb3', 900),
  yogaSunset: u('photo-1544367567-0f2fcb009e0b', 900),
  yogaMeditate: u('photo-1506126613408-eca07ce68773', 900),
  nutritionBowl: u('photo-1512621776951-a57141f2eefd', 900),
  mealTofu: u('photo-1546069901-ba9599a7e63c', 900),
  mealBreakfast: u('photo-1494390248081-4e521a5940db', 900),
  mealSalmon: u('photo-1467003909585-2f8a72700288', 900),
  coaching: u('photo-1571019614242-c5c5dee9f50b', 1200),
  coachMarcus: u('photo-1567013127542-490d757e51fc', 800),
  coachNadia: u('photo-1594381898411-846e7d193883', 800),
  coachElena: u('photo-1548690312-e3b507d8c110', 800),
  womanKettlebell: u('photo-1550259979-ed79b48d2a30', 900),
  womanPulldown: u('photo-1609899537878-88d5ba429bdb', 900),
  womanCrunch: u('photo-1571019613454-1cb2f99b2d8b', 900),
  aerobics: u('photo-1518611012118-696072aa579a', 900),
  groupClass: u('photo-1518310383802-640c2de311b2', 900),
  plate: u('photo-1549476464-37392f717541', 900),
  battleRope: u('photo-1599058917212-d750089bc07e', 900),
  gym: u('photo-1534438327276-14e5300c3a48', 900),
  squat: p(1552106, 900),
}
