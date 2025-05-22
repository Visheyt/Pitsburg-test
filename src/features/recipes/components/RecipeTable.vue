<script setup lang="ts">
import type { Recipe } from '@/api/types'
import { tableHeadItems } from '@/data/tablehead-items'
import Pagination from '@/shared/components/Pagination.vue'
import RecipeTableRow from './RecipeTableRow.vue'
import FilterIcon from '@/shared/svg/FilterIcon.vue'
import Loader from '@/shared/ui/Loader.vue'

defineProps<{
  data: Recipe[]
  totalPages: number
  currentPage: number
  handleSort: () => void
  loading: boolean
}>()

const emit = defineEmits<{
  (e: 'change', page: number): void
}>()
</script>

<template>
  <table class="recipe-table">
    <thead>
      <tr>
        <th v-for="item in tableHeadItems" :key="item.id">
          <div class="th-item">
            <span>{{ item.name }}</span>
            <button v-if="item.hasFilter" @click="handleSort">
              <FilterIcon />
            </button>
          </div>
        </th>
      </tr>
    </thead>
    <Loader v-if="loading" />
    <tbody>
      <RecipeTableRow
        v-for="recipe in data"
        :key="recipe.id"
        :name="recipe.name"
        :cuisine="recipe.cuisine"
        :difficulty="recipe.difficulty"
        :time="recipe.cookTimeMinutes"
        :tags="recipe.tags"
        :calories="recipe.caloriesPerServing"
      />
    </tbody>
    <tfoot class="tfoot">
      <tr>
        <td colspan="100%">
          <Pagination
            :length="totalPages"
            :current="currentPage"
            @change="(page) => emit('change', page)"
          />
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<style>
.recipe-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: white;
  border-radius: 12px;
  border: 1px solid #eaecf0;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}

.recipe-table th {
  padding: 12px 0px 12px 12px;
  text-align: left;
  box-shadow: 0px -1px 0px 0px #e5e9eb inset;
  color: #5a5c5f;
}
.th-item {
  display: flex;

  gap: 8px;
}

.recipe-table td {
  padding: 12px 0px 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
  max-width: 233px;
}
</style>
