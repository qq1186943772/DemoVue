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
          path: '/user_list',
          component: () => import('@/view/system/user')
        }
      ]
    }
  ]
})

export default router
