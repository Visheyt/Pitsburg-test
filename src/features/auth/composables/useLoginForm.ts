import router from '@/router'
import { reactive, computed } from 'vue'

interface FormData {
  email: string
  password: string
}

export const useLoginForm = () => {
  const form = reactive<FormData>({
    email: '',
    password: '',
  })

  const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.trim()) ? '' : 'Пожалуйста введите валидный email адрес'
  }

  const validatePassword = (password: string): string => {
    return password.trim().length >= 5 ? '' : 'Пароль должен состоять минимум из 5 знаков'
  }

  const errors = computed(() => ({
    email: validateEmail(form.email),
    password: validatePassword(form.password),
  }))

  const isValid = computed(() => {
    return !errors.value.email && !errors.value.password
  })

  const submit = async () => {
    if (!isValid.value) return

    router.push('/recipes')
  }

  return {
    form,
    errors,
    isValid,
    submit,
  }
}
