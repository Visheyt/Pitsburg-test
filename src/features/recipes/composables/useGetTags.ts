import { getTags } from '@/api/getTags'
import { useFetch } from '@/shared/composables/useFetch'
import { ref, onMounted } from 'vue'

export const useGetTags = () => {
  const selectedTag = ref<string>()

  const { data, execute } = useFetch<string[]>()

  onMounted(() => {
    execute(getTags)
  })

  return {
    data,
    selectedTag,
  }
}
