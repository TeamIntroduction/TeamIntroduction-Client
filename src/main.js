import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import common from '@/assets/js/common'
import axios from 'axios'
import {setInterceptors} from '@/assets/js/interceptor'


Vue.config.productionTip = false
let instance = axios.create({
  baseURL: "http://127.0.0.1:3000",
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
