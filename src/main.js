import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import common from '@/assets/js/common'
import axios from 'axios'
import {setInterceptors} from '@/assets/js/interceptor'

Vue.config.productionTip = false
let instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL+'/api',
  withCredentials: true,
});
setInterceptors(instance)

Vue.prototype.$axios = instance
Vue.use(common)

new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app')
