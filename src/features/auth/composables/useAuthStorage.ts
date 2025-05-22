const STORAGE_KEY = 'users'

type User = {
  email: string
  password: string
}

export function useAuthStorage() {
  const getUsers = (): User[] => JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') || []

  const saveUsers = (users: User[]) => localStorage.setItem(STORAGE_KEY, JSON.stringify(users))

  const login = (email: string, password: string): { success: boolean; error?: string } => {
    const users = getUsers()
    const user = users.find((u) => u.email === email)

    if (!user) {
      users.push({ email, password })
      saveUsers(users)
      return { success: true }
    }

    return user.password === password
      ? { success: true }
      : { success: false, error: 'Неверный пароль' }
  }

  return { login }
}
