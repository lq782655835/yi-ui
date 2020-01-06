import Vue from 'vue'
import app from './app.vue'
import router from './router'
import 'highlight.js/styles/atom-one-dark.css'

import YIUI from '../packages'
Vue.use(YIUI)

Vue.config.productionTip = false

new Vue({
    render: h => h(app),
    router
}).$mount('#app')
