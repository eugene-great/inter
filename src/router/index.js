import { createRouter, createWebHistory } from 'vue-router'
import PracticeView from '../views/PracticeView.vue'

const routes = [
  {
    path: '/',
    name: 'practice',
    component: PracticeView
  },
  {
    path: '/import',
    name: 'import',
    component: () => import(/* webpackChunkName: "import" */ '../views/ImportView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
