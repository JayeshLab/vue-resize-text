import Vue from 'vue'
import Demo from './Demo.vue'
import VueResizeText from './index.js'

Vue.config.productionTip = false
Vue.use(VueResizeText)

new Vue({
  render: h => h(Demo),
}).$mount('#app')
