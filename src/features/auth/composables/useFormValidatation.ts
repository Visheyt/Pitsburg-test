import { ref, watch } from 'vue'

export const useLoginFormValidation = () => {
  const email = ref('')
  const password = ref('')
  const emailError = ref('')
  const passwordError = ref('')

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value)
  }

  const validateEmailField = (value: string) => {
    emailError.value = validateEmail(value) ? '' : 'Введите корректный email'
  }

  const validatePasswordField = (value: string) => {
    passwordError.value = value.length >= 3 ? '' : 'Пароль должен быть не короче 3 символов'
  }

  watch(email, validateEmailField)
  watch(password, validatePasswordField)

  const validate = () => {
    validateEmailField(email.value)
    validatePasswordField(password.value)

    return !emailError.value && !passwordError.value
  }

  return {
    email,
    password,
    emailError,
    passwordError,
    validate,
  }
}
