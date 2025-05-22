<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ListIcon from '../svg/ListIcon.vue'

const model = defineModel<string>()
const props = defineProps<{
  options: string[]
  name: string
}>()

const isOpen = ref(false)
const selectRef = ref<HTMLElement | null>(null)

const selectOption = (option: string) => {
  model.value = option
  isOpen.value = false
}

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
</script>

<template>
  <div class="custom-select" ref="selectRef" @click="toggleDropdown">
    <div class="select-name">
      <ListIcon />
      <span>{{ model || name }}</span>
    </div>
    <svg
      class="arrow"
      :class="{ 'arrow--open': isOpen }"
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L6 6L11 1"
        stroke="#8A8F94"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <ul v-if="isOpen" class="dropdown">
      <li
        v-for="option in props.options"
        :key="option"
        class="dropdown-item"
        :class="{ 'dropdown-item--selected': option === model }"
        @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.custom-select {
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px 0px #1018280d;
  border-radius: 10px;
  padding: 12px 14px;
  width: 230px;
  background-color: white;
  font-weight: 500;
  font-size: 16px;
  color: #5a5c5f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
}
.select-name {
  display: flex;
  align-items: center;
  gap: 8px;
}
.select-button {
  display: flex;
  align-items: center;
}
.arrow {
  transition: transform 0.2s ease;
}
.arrow--open {
  transform: rotate(180deg);
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background-color: white;
  border: 1px solid #eaecf0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
}

.dropdown-item {
  padding: 10px 12px;
  cursor: pointer;
}
.dropdown-item:hover {
  background-color: #f5f5f5;
}
.dropdown-item--selected {
  background-color: #e0e7ff;
  font-weight: 500;
}
</style>
