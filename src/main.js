import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import router from './router/index'
import common from '@/assets/js/common'


Vue.config.productionTip = false
Vue.prototype.$axios = axios.create({
  withCredentials: true,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN")
  }
});
Vue.use(common)

new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app')
