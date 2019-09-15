import Vue from 'vue'
import App from './App.vue'
import {i,a} from './test'


Vue.config.productionTip = false

console.log(typeof App); 
new Vue({
  render: h => h(App),
}).$mount('#app')
