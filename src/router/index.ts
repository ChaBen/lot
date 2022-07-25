import { useLocalStorage } from '@vueuse/core'
import { createWebHistory, createRouter } from 'vue-router'
import Login from '@/views/login.vue'
import Dashboard from '@/views/dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    },
    children: []
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { value: isLogin } = useLocalStorage('token', null)

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isLogin) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})
