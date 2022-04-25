import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/question',
    name: 'question',
    component: () => import(/* webpackChunkName: "question" */ '../views/QuestionView.vue')
  },
  {
    path: '/import',
    name: 'import',
    component: () => import(/* webpackChunkName: "question" */ '../views/EditView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
