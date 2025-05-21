<script setup lang="ts">
import { useLoginFormValidation } from './composables/useFormValidatation'
import CustomInput from '@/shared/components/CustomInput.vue'
import CustomLabel from '@/shared/components/CustomLabel.vue'
import LogoImage from '@/shared/svg/Logo.vue'

const { email, password, emailError, passwordError, validate } = useLoginFormValidation()

const handleSubmit = () => {
  if (validate()) {
    console.log('Отправка формы', { email: email.value, password: password.value })
  }
}
</script>

<template>
  <main class="page">
    <form @submit.prevent="handleSubmit" class="form">
      <fieldset class="form-header">
        <LogoImage />
        <h1>Вход в личный кабинет</h1>
      </fieldset>

      <fieldset class="form-inputs">
        <div class="form-field">
          <CustomLabel :for="'email'">Email</CustomLabel>
          <CustomInput id="email" type="email" placeholder="Введите email" v-model="email" />
          <p v-if="emailError" class="error">{{ emailError }}</p>
        </div>

        <div class="form-field">
          <CustomLabel :for="'password'">Пароль</CustomLabel>
          <CustomInput
            id="password"
            type="password"
            placeholder="Введите пароль"
            v-model="password"
          />
          <p v-if="passwordError" class="error">{{ passwordError }}</p>
        </div>
      </fieldset>

      <fieldset class="form-buttons">
        <button type="submit" class="enter-button">Войти</button>
        <button type="button" class="forget-button">Забыли пароль?</button>
      </fieldset>
    </form>
  </main>
</template>

<style scoped>
.error {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}
</style>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 449px;
  box-shadow: 0px 0px 16px 0px #1018280a;
  padding: 40px 50px;
  border-radius: 12px;
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

.form-buttons {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.enter-button {
  border-radius: 8px;
  background-color: var(--violet);
  color: white;
  border: none;
  padding-block: 14px;
  font-weight: 600;
}
.forget-button {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  color: black;
}
</style>
