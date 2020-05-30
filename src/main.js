//Dependencas
import Vue from 'vue'
import App from './App.vue'
import Icon from 'vue-awesome/components/Icon'
import router from '@/router'
import store from '@/store'

Vue.component('v-icon', Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
