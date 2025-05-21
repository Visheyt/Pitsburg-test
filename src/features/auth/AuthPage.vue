<script setup lang="ts">
import { useLoginForm } from './composables/useLoginForm'
import CustomInput from '@/shared/ui/CustomInput.vue'
import CustomLabel from '@/shared/ui/CustomLabel.vue'
import LogoImage from '@/shared/svg/Logo.vue'

const { form, errors, isValid, submit } = useLoginForm()
</script>

<template>
  <main class="page">
    <form @submit.prevent="submit" class="form" autocomplete="off">
      <fieldset class="form-header">
        <LogoImage class="logo" />
        <h1>Вход в личный кабинет</h1>
      </fieldset>

      <fieldset class="form-inputs">
        <div class="form-field">
          <CustomLabel for="email">Email</CustomLabel>
          <CustomInput
            id="email"
            type="email"
            placeholder="Введите email"
            v-model="form.email"
            :error="errors.email"
            :style="`${errors.email ? 'outline:1px solid red' : ''}`"
          />
          <p v-if="errors.email" class="error">{{ errors.email }}</p>
        </div>

        <div class="form-field">
          <CustomLabel for="password">Пароль</CustomLabel>
          <CustomInput
            id="password"
            type="password"
            placeholder="Введите пароль"
            v-model="form.password"
            :error="errors.password"
            :style="`${errors.password ? 'outline:1px solid red' : ''}`"
          />
          <p v-if="errors.password" class="error">{{ errors.password }}</p>
        </div>
      </fieldset>

      <fieldset class="form-buttons">
        <button type="submit" class="enter-button" :disabled="!isValid">Войти</button>
        <button type="button" class="forget-button">Забыли пароль?</button>
      </fieldset>
    </form>
  </main>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 449px;
  box-shadow: 0px 0px 16px 0px rgba(16, 24, 40, 0.04);
  padding: 40px 50px;
  border-radius: 12px;
  background-color: #ffffff;
}

.form-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.error {
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
}

.form-buttons {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.enter-button {
  border-radius: 8px;
  background-color: var(--violet);
  color: #ffffff;
  border: none;
  padding: 14px;
  font-weight: 600;
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
  font-weight: 500;
  font-size: 16px;
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
