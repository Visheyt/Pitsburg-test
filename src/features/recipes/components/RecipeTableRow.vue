<script setup lang="ts">
import type { BadgeType } from '@/shared/types/dififictulty'
import Badge from '@/shared/ui/Badge.vue'
import Tag from '@/shared/ui/Tag.vue'
import { translateDifficulty } from '@/utils/translateDifficulty'

defineProps<{
  name: string
  cuisine: string
  difficulty: BadgeType
  calories: number
  time: number
  tags: string[]
}>()
</script>

<template>
  <tr class="table-row">
    <td class="name-td">{{ name }}</td>
    <td class="cuisine-td">{{ cuisine }}</td>
    <td class="badge-td">
      <Badge :badge-style="difficulty">{{ translateDifficulty(difficulty) }}</Badge>
    </td>
    <td class="calories-td">{{ `${calories} кал.` }}</td>
    <td class="time-td">{{ `${time} минут` }}</td>
    <td class="tags-td">
      <div class="tags">
        <Tag v-for="(tag, index) in tags" :key="index">{{ tag }}</Tag>
      </div>
    </td>
  </tr>
</template>

<style scoped>
.name-td {
  width: 100%;
  width: 190px;
}
.cuisine-td {
  width: 100%;
  width: 190px;
}
.badge-td {
  width: 100%;
  width: 185px;
}
.calories-td {
  width: 100%;
  width: 233px;
}
.time-td {
  width: 100%;
  width: 148px;
}
.tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.tags-td {
  width: 100%;
  width: 217px;
}
</style>
