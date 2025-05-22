import { ref, type Ref } from 'vue'

export const useSearchRecipes = (currentPage: Ref<number>, triggerFetch: () => void) => {
  const search = ref('')

  const handleSearch = (query: string) => {
    search.value = query
    currentPage.value = 1
    triggerFetch()
  }

  return {
    handleSearch,
    search,
  }
}
