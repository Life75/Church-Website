import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import VTestimonials from '../components/Views/VTestimonials.vue'
import PastorDetail from '../components/PastorDetail.vue'
const base = '/Church-Website'
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
    }
  ]
})

export default router