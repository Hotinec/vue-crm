import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from './router'
import 'materialize-css/dist/js/materialize'
import dateFilter from '@/filters/date.filter'
import messafePlugin from '@/utils/message.plugin'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messafePlugin)
Vue.filter('date', dateFilter)

const config = {
  apiKey: 'AIzaSyDHPS7dKuJCZTiRc9aip6qW-CjEYtYDyuc',
  authDomain: 'crm-vue-b200e.firebaseapp.com',
  databaseURL: 'https://crm-vue-b200e.firebaseio.com',
  projectId: 'crm-vue-b200e',
  storageBucket: 'crm-vue-b200e.appspot.com',
  messagingSenderId: '188790784697',
  appId: '1:188790784697:web:95d31ee7f4b67137749168',
  measurementId: 'G-T2D6TT377P'
}

firebase.initializeApp(config)

let start

firebase.auth().onAuthStateChanged(() => {
  if (!start) {
    start = new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
