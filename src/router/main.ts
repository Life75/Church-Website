import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import VTestimonials from '../components/Views/VTestimonials.vue'
import VHistory from '../components/Views/VHistory.vue'
import PastorDetail from '../components/PastorDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/Church-Website',
        name: 'Home',
        component: Home,
        //children
    },
    {
      path: '/Testimonials',
      name: 'Testimonials',
      component: VTestimonials
    },
    {
      path: '/History',
      name: 'History',
      component: VHistory
    },
    {
      path: '/Pastor',
      name: 'PastorInfo',
      component: PastorDetail
    }
  ]
})

export default router