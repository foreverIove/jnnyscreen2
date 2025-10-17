import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Login from '@/views/Login/index.vue'
import Screen from '@/views/screen/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      //  重定向
      // component: Screen
      redirect: '/screen/frontpage'
    },
    {
      path: '/screen',
      component: Screen,
      redirect: '/screen/frontpage',
      children: [
        {
          name: 'PageOne',
          path: 'PageOne',

          component: () => import(`@/views/PageOne/index.vue`)
        },
        // @/views/PageOne/index.vue
        {
          name: 'ParkingComprehensive',
          path: 'ParkingComprehensive',
          component: () => import('@/views/ParkingComprehensive/index.vue')
        },
        // frontpage
        {
          name: 'frontpage',
          path: 'frontpage',
          component: () => import('@/views/frontpage/index.vue')
        },
        {
          name: 'BusinessCollaboration',
          path: 'BusinessCollaboration',
          component: () => import('@/views/BusinessCollaboration/index.vue')
        },
        // frontpage
        {
          name: 'frontpage',
          path: 'frontpage',
          component: () => import('@/views/frontpage/index.vue')
        },
        {
          name: 'pagefive',
          path: 'pagefive',
          component: () => import('@/views/pagefive/index.vue')
        }
      ]
    },
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: () => import(`@/views/error/404.vue`)
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/test_cxs/test01.vue')
    },
    {
      path: '/testPuls',
      name: '/testPuls',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/test_cxs/testPuls.vue')
    }
  ]
})

export default router
