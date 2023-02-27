import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/components/Login.vue"
import SignUpPage from "@/components/SignUp.vue"

const routes = [
    
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUpPage,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
