<script setup lang="ts">
import type { BadgeType } from '../types/dififictulty'

defineProps<{
  badgeStyle: BadgeType | 'admin'
}>()
</script>

<template>
  <span :class="badgeStyle" class="badge">
    <slot />
  </span>
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
.Easy {
  border: 1px solid #90fb90;
  background:
    linear-gradient(0deg, #90fb90, #90fb90),
    linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  color: #44d54d;
}
.Medium {
  border: 1px solid #f5a6231a;
  background:
    linear-gradient(0deg, rgba(245, 166, 35, 0.33), rgba(245, 166, 35, 0.33)),
    linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  color: #ffb700;
}
.Hard {
  border: 1px solid #f5a6231a;
  background:
    linear-gradient(0deg, rgba(248, 51, 51, 0.33), rgba(248, 51, 51, 0.33)),
    linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
  color: #f24848;
}
</style>
