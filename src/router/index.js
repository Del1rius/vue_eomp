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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact-View.vue')
  },
  {
    path: '/projects',
    name: 'project',
    component: () => import('../views/Projects-View.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/Resume-View.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import('../views/Testimonials-View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
