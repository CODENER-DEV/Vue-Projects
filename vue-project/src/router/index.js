import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../components/Contador.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'ListaDeTareas',
      component: () => import('../components/ListaDeTareas.vue'),
    },
    {
      path: '/registrar',
      name: 'RegistroView',
      component: () => import('../views/RegistroView.vue'),
    },
    {
      path: '/calcular',
      name: 'CalcularView',
      component: () => import('../views/CalcularView.vue'),
    }
  ],
})

export default router
