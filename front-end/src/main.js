import Vue from 'vue'
import App from './App.vue'
import router from './router'
import OllAlgorithms from './OllAlgorithms'
import PllAlgorithms from './PllAlgorithms'

Vue.config.productionTip = false

let data = {
  OllAlgorithms: OllAlgorithms,
  PllAlgorithms: PllAlgorithms
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
