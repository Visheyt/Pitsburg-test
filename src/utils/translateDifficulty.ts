import type { BadgeType } from '@/shared/types/dififictulty'

export const translateDifficulty = (difficulty: BadgeType) => {
  switch (difficulty) {
    case 'Easy':
      return 'Легко'
    case 'Medium':
      return 'Средний'
    case 'Hard':
      return 'Тяжелый'
  }
}
