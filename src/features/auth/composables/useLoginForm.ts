import router from '@/router'
import { ref, computed, watch } from 'vue'

interface FormData {
  email: string
  password: string
}

interface FormErrors {
  email: string
  password: string
}

export const useLoginForm = () => {
  const form = ref<FormData>({
    email: '',
    password: '',
  })

  const errors = ref<FormErrors>({
    email: '',
    password: '',
  })

  const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.trim()) ? '' : 'Пожалуйста введите валидный email адрес'
  }

  const validatePassword = (password: string): string => {
    return password.trim().length >= 3 ? '' : 'Пароль должен состоять минимум из 3 знаков'
  }

  watch(
    () => form.value.email,
    (newVal) => {
      errors.value.email = validateEmail(newVal)
    },
  )

  watch(
    () => form.value.password,
    (newVal) => {
      errors.value.password = validatePassword(newVal)
    },
  )

  const validate = (): boolean => {
    errors.value.email = validateEmail(form.value.email)
    errors.value.password = validatePassword(form.value.password)
    return !errors.value.email && !errors.value.password
  }

  const isValid = computed(() => {
    return !errors.value.email && !errors.value.password
  })

  const submit = async () => {
    if (!validate()) return

    router.push('/recipes')
  }

  return {
    form,
    errors,
    isValid,
    submit,
  }
}
