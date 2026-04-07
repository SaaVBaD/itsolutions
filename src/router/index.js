import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "../pages/home-page.vue";
import TermsPage from "../pages/terms-page.vue";
import PolicyPage from "../pages/policy-page.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsPage
  },
  {
    path: '/policy',
    name: 'policy',
    component: PolicyPage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.querySelector('#app').scrollIntoView({ behavior: 'smooth' })
    return {
      top: 0,
      left: 0,
      behavior: 'smooth'
    }
  }
})

export default router
