<script setup lang="ts">
import LeftIcon from '../svg/LeftIcon.vue'
import RightIcon from '../svg/RightIcon.vue'

const { length, current } = defineProps<{
  length: number
  current: number
}>()

const emit = defineEmits<{
  (e: 'change', page: number): void
}>()

const goToPage = (page: number) => {
  emit('change', page)
}

const nextPage = () => {
  if (current < length) {
    emit('change', current + 1)
  }
}

const prevPage = () => {
  if (current > 1) {
    emit('change', current - 1)
  }
}
</script>

<template>
  <div class="pagination">
    <button @click="prevPage" class="pagination-button">
      <LeftIcon />
    </button>
    <div class="pagination-items">
      <div
        class="pagination-item"
        v-for="(_, index) in Array.from({ length })"
        :key="index"
        :class="{ active: index + 1 === current }"
        @click="goToPage(index + 1)"
      >
        {{ index + 1 }}
      </div>
    </div>
    <button @click="nextPage" class="pagination-button">
      <RightIcon />
    </button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: flex-end;
  padding-inline: 20px;
}
.pagination button {
  width: 20px;
  height: 20px;
  opacity: 0.5;
  border-radius: 6px;
}
.pagination-items {
  display: flex;
  gap: 2px;
  align-items: center;
}
.pagination-item {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.6%;
  width: 32px;
  height: 32px;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 8px;
}
.active {
  background: #af52de;
  color: #ffffff;
}
.pagination-button {
  color: #5a5c5f;
}
.pagination-button:hover {
  color: var(--violet);
}
</style>
