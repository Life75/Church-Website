import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import VTestimonials from '../components/Views/VTestimonials.vue'
import PastorDetail from '../components/PastorDetail.vue'
import VSignIn from '../components/Views/VSignIn.vue'
import Dashboard from '../components/Dashboard.vue'
const base = '/'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: base,
        name: 'Home',
        component: Home,
        //children
    },
    {
      path: `/Testimonials`,
      name: 'Testimonials',
      component: VTestimonials
    },
    {
      path: `/Pastor`,
      name: 'PastorInfo',
      component: PastorDetail
    }, 
    {
      path: '/SignIn',
      name: 'Sign In', 
      component: VSignIn
    }, 
    {
      path: '/Dashboard',
      name: "Dashboard",
      component: Dashboard
    }
  ]
})

export default router