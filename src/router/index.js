import { createRouter, createWebHashHistory } from 'vue-router'
// 公共路由表

const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    // component: () => import('../views/login')
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home'),
    redirect: '/index',
    meta: {
      title: '首页',
      icon: 'reward'
    },
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../layout/index')
      }

    ]
  }
]
const privateRoutes = [
  {
    path: '/sys',
    name: 'sys:manage',
    component: () => import('../views/home'),
    redirect: '/sys/users',
    meta: {
      title: '系统管理',
      icon: 'hamburger-closed'
    },
    children: [
      {
        path: '/sys/users',
        name: 'sys:user:list',
        component: () => import('@/views/usersList/index'),
        meta: {
          title: '用户管理',
          icon: 'personnel'
        }
      },
      {
        path: '/sys/roles',
        name: 'sys:role:list',
        component: () => import('@/views/roleList/index'),
        meta: {
          title: '角色管理',
          icon: 'exit-fullscreen'
        }
      },
      {
        path: '/sys/menus',
        name: 'sys:menu:list',
        component: () => import('@/views/menusList'),
        meta: {
          title: '菜单管理',
          icon: 'table'
        }
      }
    ]
  },
  {
    path: '/system',
    name: 'sys:tools',
    redirect: '/system/dicts',
    component: () => import('../views/home'),
    meta: {
      title: '系统工具',
      icon: 'example'
    },
    children: [
      {
        path: '/system/dicts',
        name: 'sys:dict:list',
        component: () => import('@/views/dictsList/index'),
        meta: {
          title: '数字字典',
          icon: 'article'
        }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
