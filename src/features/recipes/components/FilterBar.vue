<script setup lang="ts">
import SearchIcon from '@/shared/svg/SearchIcon.vue'
import CustomInput from '@/shared/ui/CustomInput.vue'
import CustomSelect from '@/shared/ui/CustomSelect.vue'
import { useGetTags } from '../composables/useGetTags'

const searchValue = defineModel<string>({ default: '' })
defineProps<{
  handleSearch: (query: string) => void
}>()

const { data: tags, selectedTag } = useGetTags()
</script>

<template>
  <div class="container">
    <CustomSelect :options="tags ?? []" v-model="selectedTag" name="Теги" />
    <div class="input-container">
      <CustomInput
        placeholder="Найти рецепт"
        v-model="searchValue"
        @keydown.enter="handleSearch(searchValue)"
      >
        <template #icon>
          <SearchIcon class="input-icon" />
        </template>
      </CustomInput>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-container {
  width: 100%;
  max-width: 314px;
}
.tags-select {
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
}
.tags-select div {
  display: flex;
  gap: 8px;
  align-items: center;
}
</style>
