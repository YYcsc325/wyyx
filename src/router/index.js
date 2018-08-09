import Vue from 'vue'
import Router from 'vue-router'

// import Header from '../components/Header.vue'
import IndexBody from '../views/IndexBody.vue'
import Login from '../views/Login.vue'

import Index from '../views/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Index, children: [
      {path: '', component: IndexBody}
    ]},
    {path: '/index', component: Index, children: [
      {path: '', component: IndexBody}
    ]},
    {path: '/login', component: Login}
  ]
})
