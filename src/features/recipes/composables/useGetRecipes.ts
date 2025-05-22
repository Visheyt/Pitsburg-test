import { RECIPES_PER_PAGE_LIMIT } from '@/api'
import { getRecipes } from '@/api/getRecipes'
import { searchRecipes } from '@/api/searchRecipe'
import { sortRecipes } from '@/api/sortRecipes'
import type { RecipesResponse } from '@/api/types'
import { useFetch } from '@/shared/composables/useFetch'
import { computed, ref, watch } from 'vue'
import { useSearchRecipes } from './useSearchRecipes'
import { useSortRecipes } from './useSortRecipes'

export function useGetRecipes() {
  const currentPage = ref(1)

  const totalPages = computed(() =>
    data.value?.total ? Math.ceil(data.value.total / RECIPES_PER_PAGE_LIMIT) : 0,
  )

  const { data, loading, error, execute } = useFetch<RecipesResponse>()

  const { search, handleSearch } = useSearchRecipes(currentPage, triggerFetch)

  const { sort, handleSort } = useSortRecipes(currentPage, triggerFetch)

  function triggerFetch() {
    execute(fetchRecipes)
  }

  const fetchRecipes = (): Promise<RecipesResponse> => {
    const page = currentPage.value

    if (search.value.length > 3) {
      return searchRecipes(search.value, page)
    }

    if (sort.value) {
      return sortRecipes(sort.value, page)
    }

    return getRecipes(page)
  }

  watch(currentPage, () => {
    triggerFetch()
  })

  triggerFetch()

  return {
    currentPage,
    totalPages,
    data,
    loading,
    error,
    search,
    sort,
    handleSearch,
    handleSort,
  }
}
