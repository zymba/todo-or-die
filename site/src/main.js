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
  request.headers.set('Authorization', 'Bearer ' + window.sessionStorage['token'])
  next()
})

const store = new Vuex.Store(VuexStore)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.state.login.auth.check && to.meta.auth) {
    return router.push({name: 'login'})
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
