import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/user.vue')
    },
    {
      path: '/REST',
      name: 'rest',
      component: () => import('./views/REST.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/test.vue')
    },
    {
      path: '/sign',
      name: 'sign',
      component: () => import('./views/sign.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('./views/main.vue')
    },
    {
      path:'/test',
      name:'헤더',
      component: () => import('./views/test'),

      beforeEnter: (to,from,next) => {
        console.log(to)
        console.log(from)
        if(!localStorage.getItem('token')) return next('block')
        next()
      }
    },
    {
     path:'/block',
     name:'차단'
    }
  ]
})