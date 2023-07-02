import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/NavBar.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [{
      path: 'index',
      name: 'Index',
      component: () => import('@/views/IndexView.vue'),
      meta: { title: '首页', icon: 'el-icon-pie-chart' }
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('../views/LoginView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
