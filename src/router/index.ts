import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Header from '../components/Header.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/a',
    name: 'Home',
    component: Header
  },
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomePage/Home.vue')
  },
  {
    path: '/about-dlc',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About-dlc/About-dlc.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "gallery" */ '../views/Gallery/Gallery.vue')
  },
  {
    path: '/our_world',
    name: 'Our World',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "our_world" */ '../views/our_world/our_world.vue')
  },
  {
    path: '/experience',
    name: 'experience',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "our_world" */ '../views/Experience/Experience.vue')
  },
  {
    path: '/press',
    name: 'press',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "our_world" */ '../views/Press/Press.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
