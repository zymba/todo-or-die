// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

import App from './App'
import routes from './router'
import VuexStore from './vuex/store'

Vue.config.productionTip = false
Vue.http.options.root = process.env.SERVER

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdDo4MDAwXC9hcGlcL2xvZ2luIiwiaWF0IjoxNDk1MjE5NTI5LCJleHAiOjE0OTUyMjMxMjksIm5iZiI6MTQ5NTIxOTUyOSwianRpIjoiZWNMZWNDM3NRMlJmVk1HSiJ9.0JCgEBjY6t1s0STu0R1TprnCsDe1FTFss1IHravm0Ss')
  next()
})

const store = new Vuex.Store(VuexStore)

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
