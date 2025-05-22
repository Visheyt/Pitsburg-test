<script setup lang="ts">
import { ref } from 'vue'
import { useLoginForm } from '../composables/useLoginForm'
import LoginHeader from './LoginHeader.vue'
import LoginInputs from './LoginInputs.vue'
import LoginButtons from './LoginButtons.vue'

const { form, errors, isValid, submit } = useLoginForm()
const isPasswordVisible = ref(false)

const handlePasswordVisible = () => {
  if (form.password.length > 0) isPasswordVisible.value = !isPasswordVisible.value
}
</script>

<template>
  <form @submit.prevent="submit" class="form">
    <LoginHeader />
    <LoginInputs
      v-model:password="form.password"
      v-model:email="form.email"
      :errors="errors"
      :isPasswordVisible="isPasswordVisible"
      @togglePasswordVisibility="handlePasswordVisible"
    />
    <LoginButtons :isValid="isValid" />
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 449px;
  padding: 40px 50px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 16px rgba(16, 24, 40, 0.04);
}
</style>
