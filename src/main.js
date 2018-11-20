import Vue from 'vue'
import app from './app.vue'
import * as YIUI from '../index'
Object.keys(YIUI).forEach(key => Vue.component(key, YIUI[key]))

Vue.config.productionTip = false

new Vue({
  render: h => h(app),
}).$mount('#app')
