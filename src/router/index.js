import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Admin from '@/components/admin'
import Index from '@/components/index'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: '主页',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: '首页',
        component: Index
      },
      {
        path: 'admin',
        name: '后台管理',
        component: Admin
      }
    ]
  }
]
const router = new Router({
  routes: routes
})

export default router
