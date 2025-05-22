import { BASE_URL, RECIPES_PER_PAGE_LIMIT } from '.'
import type { RecipesResponse } from './types'

export const sortRecipes = async (sortType: 'asc' | 'desc', page = 1): Promise<RecipesResponse> => {
  const skip = (page - 1) * RECIPES_PER_PAGE_LIMIT
  try {
    const res = await fetch(
      `${BASE_URL}?sortBy=name&order=${sortType}&limit=${RECIPES_PER_PAGE_LIMIT}&skip=${skip}`,
    )
    if (!res.ok) throw new Error('Failed to fetch recipes')

    const data: RecipesResponse = await res.json()
    return data
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : 'Something went wrong')
  }
}
