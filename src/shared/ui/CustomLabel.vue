<script setup lang="ts">
defineProps<{
  htmlFor?: string
}>()
</script>

<template>
  <label :for="htmlFor" class="label">
    <slot />
  </label>
</template>

<style scoped>
.label {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  color: #242528;
}
</style>
