import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from './router'
import 'materialize-css/dist/js/materialize'
import dateFilter from '@/filters/date.filter'
import messafePlugin from '@/utils/message.plugin'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messafePlugin)
Vue.filter('date', dateFilter)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
