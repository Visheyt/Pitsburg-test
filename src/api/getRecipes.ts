import { BASE_URL, RECIPES_PER_PAGE_LIMIT } from '.'
import type { RecipesResponse } from './types'

export const getRecipes = async () => {
  try {
    const res = await fetch(`${BASE_URL}?limit=${RECIPES_PER_PAGE_LIMIT}`)
    const data: RecipesResponse = await res.json()
    return data
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    } else {
      throw new Error('Something went wrong')
    }
  }
}
