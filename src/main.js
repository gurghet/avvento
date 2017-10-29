// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from './store'
import {config} from './helpers/firebaseConfig'

Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created () {
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.push('/auth')
        store.commit('CLEAR_USER')
      } else {
        store.commit('SET_USER', { user: firebase.auth().currentUser })
      }
    })
  },
  firebase: {},
  store,
  template: '<App/>',
  components: { App }
})
