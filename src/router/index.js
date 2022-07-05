import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    // component: () => import('../views/login')
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
