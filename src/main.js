import Vue from 'vue'
import app from './app.vue'
import * as YIUI from '../index'

// 本地icon
import * as svgicon from 'vue-svgicon'
import '@/assets/icon'
Vue.use(svgicon, { tagName: 'svgicon', width: 100, height: 100 })
import UIcon from './components/u-icon'
Vue.component('UIcon', UIcon)

Object.keys(YIUI).forEach(key => {
    Vue.component(key, YIUI[key])
    key === 'UToast' && (Vue.prototype.$toast = YIUI[key].toast)
})

Vue.config.productionTip = false

new Vue({
    render: h => h(app)
}).$mount('#app')
