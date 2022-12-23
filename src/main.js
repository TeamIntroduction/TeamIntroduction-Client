import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import router from './router/index'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
