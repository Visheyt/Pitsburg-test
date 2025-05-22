import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: AuthLayout,
      children: [
        {
          path: '',
          name: 'Login',
          component: () => import('../features/auth/AuthPage.vue'),
        },
      ],
    },
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: 'recipes',
          name: 'Recipes',
          component: () => import('../features/recipes/RecipesPage.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: ':pathMatch(.*)*',
          name: 'NotFound',
          component: () => import('../shared/components/NotfoundPage.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isAuthorized = localStorage.getItem('isAuthorized') === 'true'
  if (to.meta.requiresAuth && !isAuthorized) {
    next('/login')
  } else {
    next()
  }
})

export default router
