import { onMounted, onUnmounted, ref } from 'vue'

export const useSelect = () => {
  const isOpen = ref(false)
  const selectRef = ref<HTMLElement | null>(null)

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
      isOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })

  return {
    toggleDropdown,
    isOpen,
    selectRef,
  }
}
