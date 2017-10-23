import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const Routers = {
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }
  ]
}
const RouterConfig = {
  linkActiveClass: 'active',
  mode: 'history',
  routes: Routers
}
export default new Router(RouterConfig)
