import { RECIPES_PER_PAGE_LIMIT } from '@/api'
import { getRecipes } from '@/api/getRecipes'
import type { RecipesResponse } from '@/api/types'
import { useFetch } from '@/shared/composables/useFetch'
import { computed, ref, watch } from 'vue'

export function useGetRecipes() {
  const currentPage = ref(1)

  const { data, loading, error, execute } = useFetch<RecipesResponse>()

  const totalPages = computed(() => {
    return data.value?.total ? Math.ceil(data.value.total / RECIPES_PER_PAGE_LIMIT) : 0
  })

  watch(
    currentPage,
    () => {
      execute(() => getRecipes(currentPage.value))
    },
    { immediate: true },
  )

  return {
    currentPage,
    data,
    loading,
    error,
    totalPages,
  }
}
