import AuthPage from '@/features/auth/AuthPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: AuthPage,
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () => import('../features/recipes/RecipesPage.vue'),
    },
  ],
})

export default router
