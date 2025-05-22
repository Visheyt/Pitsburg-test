import { BASE_URL } from '.'
import type { RecipesResponse } from './types'

export const searchRecipes = async (query: string): Promise<RecipesResponse> => {
  try {
    const res = await fetch(`${BASE_URL}/search?q=${query}`)
    if (!res.ok) throw new Error('Failed to fetch recipes')

    const data: RecipesResponse = await res.json()
    return data
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : 'Something went wrong')
  }
}
