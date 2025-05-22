import { getTags } from '@/api/getTags'
import { useFetch } from '@/shared/composables/useFetch'
import { onMounted } from 'vue'

export const useTags = () => {
  const { data, execute } = useFetch<string[]>()

  onMounted(() => {
    execute(getTags)
  })

  return {
    data,
  }
}
