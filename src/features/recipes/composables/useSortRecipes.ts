import { ref, type Ref } from 'vue'

export const useSortRecipes = (currentPage: Ref<number>, triggerFetch: () => void) => {
  const sort = ref<'asc' | 'desc' | null>(null)

  const handleSort = () => {
    sort.value = sort.value === 'asc' ? 'desc' : 'asc'
    currentPage.value = 1
    triggerFetch()
  }

  return {
    sort,
    handleSort,
  }
}
