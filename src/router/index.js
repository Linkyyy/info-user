import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/NavBar.vue'

import store from '@/store/index'

import { Message } from 'element-ui';

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
    }],
  },
  {
    path: '/',
    component: Layout,
    redirect: '/before',
    children: [{
      path: 'before',
      name: 'Before',
      component: () => import('@/views/BeforeView.vue'),
      meta: { title: '考前须知', icon: 'el-icon-pie-chart' }
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/after',
    children: [{
      path: 'after',
      name: 'After',
      component: () => import('@/views/AfterView.vue'),
      meta: { title: '交卷成功', icon: 'el-icon-pie-chart' }
    }]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path!='/login' && !store.getters.getIsLogin){
    Message.error("请先登录！")
    next('/login');
  }
  next();
})


export default router
