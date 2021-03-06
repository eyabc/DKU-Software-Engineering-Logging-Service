import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home, Content, User, Post } from '@/views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/content',
    component: Content
  },
  {
    path: '/user/:userId',
    component: User
  },
  {
    path: '/post/:idx',
    component: Post
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
