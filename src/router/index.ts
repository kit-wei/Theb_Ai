import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/login',
      name:'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path:'/register',
      name:'register',
      component: () => import('@/views/Register.vue')
    }
  ]
})
//路由前置守卫
router.beforeEach((to,from)=>{

})

export default router
