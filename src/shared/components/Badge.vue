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
.easy {
  border: 1px solid #90fb90;
  background:
    linear-gradient(0deg, #90fb90, #90fb90),
    linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  color: #44d54d;
}
.medium {
  border: 1px solid #f5a6231a;
  background:
    linear-gradient(0deg, rgba(245, 166, 35, 0.33), rgba(245, 166, 35, 0.33)),
    linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  color: #ffb700;
}
.hard {
  border: 1px solid #f5a6231a;
  background:
    linear-gradient(0deg, rgba(248, 51, 51, 0.33), rgba(248, 51, 51, 0.33)),
    linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  color: #f24848;
}
</style>
