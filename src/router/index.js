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
      component: () => import('@/view/home/home')
    }
  ]
})

export default router
