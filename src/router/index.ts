import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('./../views/VMain.vue'),
  },
  {
    path: '/page',
    name: 'page',
    component: () => import('./../views/VPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/page',
  },
]


export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ROUTING_ROOT as string || import.meta.env.BASE_URL),
  routes,
})

export default router
