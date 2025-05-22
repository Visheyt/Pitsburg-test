<script setup lang="ts">
defineProps<{
  isValid: boolean
}>()
</script>

<template>
  <fieldset class="form-buttons">
    <button type="submit" class="enter-button" :disabled="!isValid">Войти</button>
    <button type="button" class="forget-button">Забыли пароль?</button>
  </fieldset>
</template>

<style scoped>
.form-buttons {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.enter-button {
  height: 54px;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  background-color: var(--violet);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.enter-button:hover:not(:disabled) {
  background-color: #7c3aed;
}

.enter-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.forget-button {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #1f2937;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
}

.forget-button:hover {
  color: #8b5cf6;
}
</style>
