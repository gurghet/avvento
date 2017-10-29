import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Auth from '@/components/Auth'
import Intro from '@/components/Intro'
import NotFoundComponent from '@/components/NotFoundComponent'
import New from '@/components/New'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/success',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
