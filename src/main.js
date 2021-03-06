import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//移动端适配
import "./assets/style/rem" 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
