import Vue from 'vue'
import App from './App.vue'
import {i,a} from './test'


Vue.config.productionTip = false
console.log(`Переменная i:${i},и а:${a}`);

new Vue({
  render: h => h(App),
}).$mount('#app')
