import Vue from 'vue'
import Router from 'vue-router'

// import Header from '../components/Header.vue'

import Index from '../views/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Index}
  ]
})
