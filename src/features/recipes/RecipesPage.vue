<script setup lang="ts">
import { useGetRecipes } from './composables/useGetRecipes'
import FilterBar from './components/FilterBar.vue'
import RecipeTable from './components/RecipeTable.vue'

const { data, error, loading, currentPage, totalPages, handleSearch, search, handleSort } =
  useGetRecipes()
</script>

<template>
  <main class="recipe-page">
    <FilterBar v-model="search" :handleSearch />
    <RecipeTable
      :data="data ? data.recipes : []"
      :totalPages="totalPages"
      :currentPage="currentPage"
      :handleSort
      @change="(page) => (currentPage = page)"
    />
  </main>
</template>

<style>
.recipe-page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
</style>
