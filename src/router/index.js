import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/Auth.vue'
import {projectAuth} from '../firebase/config'

//auth guard
const requiredAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  console.log('current user in auth guard : '+ user.displayName);
  if(!user){
    next({name : 'Welcome'})
  }
  next()
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Auth
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/chatroom',
    name:'chatroom',
    component: () => import('../views/chatroom.vue'),
    beforeEnter : requiredAuth,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
