import { type Ref, ref, watch } from 'vue'

export const useRecipesByTag = (currentPage: Ref<number>, triggerFetch: () => void) => {
  const selectedTag = ref('')

  watch(selectedTag, () => {
    currentPage.value = 1
    triggerFetch()
  })

  return {
    selectedTag,
  }
}
