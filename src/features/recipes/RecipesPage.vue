<script setup lang="ts">
import { tableHeadItems } from '@/data/tablehead-items'
import RecipeTableRow from './components/RecipeTableRow.vue'
import { onMounted } from 'vue'
import { getRecipes } from '@/api/getRecipes'
import { useFetch } from '@/shared/composables/useFetch'
import type { RecipesResponse } from '@/api/types'

const { data, error, loading, execute } = useFetch<RecipesResponse>()

onMounted(() => {
  execute(getRecipes)
})
</script>

<template>
  <main class="recipe-page">
    <table class="recipe-table">
      <thead>
        <tr>
          <th v-for="item in tableHeadItems" :key="item.id">{{ item.name }}</th>
        </tr>
      </thead>
      <tbody>
        <RecipeTableRow
          v-for="recipe in data?.recipes"
          :key="recipe.id"
          :name="recipe.name"
          :cuisine="recipe.cuisine"
          :difficulty="recipe.difficulty"
          :time="recipe.cookTimeMinutes"
          :tags="recipe.tags"
          :calories="recipe.caloriesPerServing"
        />
      </tbody>
    </table>
  </main>
</template>

<style>
.recipe-page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.recipe-table {
  width: 100%;
  border-collapse: collapse;
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
.recipe-table td {
  padding: 12px 0px 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;

  max-width: 233px;
}

.actions .icon {
  cursor: pointer;
  margin-left: 8px;
}
</style>
