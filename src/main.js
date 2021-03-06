import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
localStorage.setItem('api', 'http://api.orar.md/api')

new Vue({
  router,
  store,
  vuetify,
  VueAxios,
  axios,
  render: h => h(App)
}).$mount('#app')
