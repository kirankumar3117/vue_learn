import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
