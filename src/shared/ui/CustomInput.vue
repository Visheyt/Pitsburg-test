<script lang="ts" setup>
const model = defineModel<string>()
</script>

<template>
  <input v-model="model" v-bind="$attrs" class="input" />
</template>

<style scoped>
.input {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  color: #8a8f94;
}
.input:focus-visible {
  outline: 1px solid var(--violet);
}
.input::placeholder {
  font-size: 16px;
}
</style>
