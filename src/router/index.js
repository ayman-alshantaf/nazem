import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from "@/views/pages/login-signup/loginView";
import signupView from "@/views/pages/login-signup/signupView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: loginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: signupView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
