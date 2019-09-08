import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import router from './router'
import store from './vuex/index'

const app = new Vue({
  router,
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({
    y: 0
  }),
  ...AppLayout,
  store
})

export {
  app,
  router,
  store
}
