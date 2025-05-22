<template>
  <fieldset class="form-header">
    <Logo class="logo" />
    <h1>Вход в личный кабинет</h1>
  </fieldset>
</template>

<script setup lang="ts">
import Logo from '@/shared/svg/Logo.vue'
</script>

<style scoped>
.logo {
  width: 148px;
  height: 38px;
}

.form-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}
</style>
