import { reactive, computed, watch } from 'vue'
import router from '@/router'
import { useAuthStorage } from './useAuthStorage'

interface FormData {
  email: string
  password: string
}

export const useLoginForm = () => {
  const form = reactive<FormData>({ email: '', password: '' })
  const errors = reactive({ email: '', password: '' })
  const { login } = useAuthStorage()

  const validateEmail = (email: string): string =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ? '' : 'Введите валидный email'

  const validatePassword = (password: string): string =>
    password.trim().length >= 5 ? '' : 'Пароль должен быть от 5 символов'

  watch(
    () => [form.email, form.password] as const,
    ([email, password]) => {
      errors.email = validateEmail(email)
      errors.password = validatePassword(password)
    },
    { immediate: true },
  )

  const isValid = computed(() => !errors.email && !errors.password)

  const submit = () => {
    if (!isValid.value) return

    const { success, error } = login(form.email, form.password)
    if (!success) {
      errors.password = error!
      return
    }

    localStorage.setItem('isAuthorized', 'true')
    localStorage.setItem('userEmail', form.email)

    router.push('/recipes')
  }

  return { form, errors, isValid, submit }
}
