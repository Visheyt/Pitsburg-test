<script setup lang="ts">
defineProps<{
  badgeStyle: 'admin' | 'easy' | 'medium' | 'hard'
}>()
</script>

<template>
  <div :class="badgeStyle" class="badge">
    <slot />
  </div>
</template>

<style scoped>
.badge {
  border-radius: 100px;
  font-weight: 500;
  font-size: 12px;
  padding: 2px 8px;
}
.admin {
  border-radius: 6px;
  background-color: #e9f3ff;
  color: #1570ef;
  padding: 3px 6px;
}
</style>
