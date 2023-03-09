import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup/phone',
      name: 'signupPhone',
      component: () => import('@/views/SignUpPhoneView.vue')
    }
    
   
  ]
})

export default router
