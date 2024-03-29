import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import LoginView from "@/views/LoginView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 
  {
    path:'/login',
    name:'login',
    component:LoginView
  },
  {
    path:"/signup",
    name:'signup',
    component: ()=> import('@/views/SignUpView.vue')
  },
  {
    path:"/MMP",
    name:"makemyportfolio",
    component:()=> import('@/views/MakeMyPortfolio.vue'),
  },
  {
    path:'/MMP/:id',
    name:'myportfolio',
    component:()=>import('@/views/MyPortfolioView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
