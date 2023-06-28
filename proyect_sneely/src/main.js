import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import 'bootstrap' 
import Vuex from 'vuex'
import store from './store'


Vue.use(Vuex)

Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
