<script setup lang="ts">
import ClosedEyeIcon from '@/shared/svg/ClosedEyeIcon.vue'
import OpenEyeIcon from '@/shared/svg/OpenEyeIcon.vue'
import CustomInput from '@/shared/ui/CustomInput.vue'
import CustomLabel from '@/shared/ui/CustomLabel.vue'

defineProps<{
  errors: { email?: string; password?: string }
  isPasswordVisible: boolean
}>()

const emit = defineEmits<{
  (e: 'togglePasswordVisibility'): void
}>()

const togglePasswordVisibility = () => emit('togglePasswordVisibility')

const email = defineModel<string>('email', { default: '' })

const password = defineModel<string>('password', { default: '' })
</script>

<template>
  <fieldset class="form-inputs">
    <div class="form-field" :class="{ 'has-error': errors.email }">
      <CustomLabel for="email">Email</CustomLabel>
      <CustomInput
        id="email"
        type="email"
        placeholder="Введите email"
        v-model="email"
        :error="errors.email"
      />
      <p v-if="errors.email" class="error">{{ errors.email }}</p>
    </div>
    <div class="form-field" :class="{ 'has-error': errors.password }">
      <CustomLabel for="password">Пароль</CustomLabel>
      <CustomInput
        id="password"
        :type="isPasswordVisible ? 'text' : 'password'"
        placeholder="Введите пароль"
        v-model="password"
        :error="errors.password"
      />
      <button type="button" class="show-password-btn" @click="togglePasswordVisibility">
        <component :is="isPasswordVisible ? OpenEyeIcon : ClosedEyeIcon" />
      </button>
      <p v-if="errors.password" class="error">{{ errors.password }}</p>
    </div>
  </fieldset>
</template>

<style scoped>
.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 8px;
}

.form-field {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-field input {
  height: 48px;
}

.form-field.has-error input {
  outline: 1px solid red;
}

.error {
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
}
.show-password-btn {
  position: absolute;
  right: 14px;
  top: 38px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
</style>
