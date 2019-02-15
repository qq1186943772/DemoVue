import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login/login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/view/home/home'),
      children: [
        {
          path: '/system_menu',
          name: 'system',
          component: () => import('@/view/home/menu'),
          children: [
            {
              path: '/user_list',
              name: 'user',
              component: () => import('@/view/system/user')
            },
            {
              path: '/role_list',
              name: 'role',
              component: () => import('@/view/system/role')
            }
          ]

        }
      ]
    }
  ]
})

export default router
