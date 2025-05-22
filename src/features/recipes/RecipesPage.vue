<script setup lang="ts">
import { useRecipes } from './composables/useRecipes'
import FilterBar from './components/FilterBar.vue'
import RecipeTable from './components/RecipeTable.vue'

const {
  data,
  error,
  loading,
  currentPage,
  totalPages,
  handleSearch,
  search,
  handleSort,
  selectedTag,
} = useRecipes()
</script>

<template>
  <main class="recipe-page">
    <FilterBar v-model:search="search" :handleSearch v-model:tag="selectedTag" />
    <RecipeTable
      :data="data ? data.recipes : []"
      :totalPages
      :currentPage
      :handleSort
      :loading
      @change="(page) => (currentPage = page)"
    />
  </main>
</template>

<style>
.recipe-page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
}
</style>
