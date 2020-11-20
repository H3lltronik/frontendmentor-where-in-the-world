import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../pages/index.vue'
import details from '../pages/details.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: index },
    { path: '/details/:name', component: details }
  ]
  
export default new VueRouter({
    routes
})