import { BASE_URL } from '.'

export const getTags = async (): Promise<string[]> => {
  try {
    const res = await fetch(`${BASE_URL}/tags`)
    if (!res.ok) throw new Error('Failed to fetch recipes')

    const data: string[] = await res.json()
    return data
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : 'Something went wrong')
  }
}
