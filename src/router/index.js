import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Admin from '@/components/admin'
import Index from '@/components/index'
import About from '@/components/about'
import Tag from '@/components/tag'
import Sort from '@/components/sort'
import Login from '@/components/login'
import Register from '@/components/register'

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
        path: 'about',
        name: '关于',
        component: About
      },
      {
        path: 'tag',
        name: '标签',
        component: Tag
      },
      {
        path: 'sort',
        name: '分类',
        component: Sort
      }
    ]
  },
  {
    path: '/admin',
    name: '后台管理',
    component: Admin
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  },
  {
    path: '/register',
    name: '注册',
    component: Register
  }
]
const router = new Router({
  routes: routes
})

export default router
