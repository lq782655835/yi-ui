import Vue from 'vue'
import app from './app.vue'
import router from './router'
import 'highlight.js/styles/atom-one-dark.css'

// import YIUI from '../lib'
// Vue.use(YIUI)

// 注册全局组件
import * as YIUI from '../packages'
Object.keys(YIUI).forEach(key => Vue.component(key, YIUI[key]))
Vue.prototype.$toast = YIUI['UToast'].toast
Vue.prototype.$confirm = YIUI['UModal'].confirm
Vue.prototype.$confirm = YIUI['UModal'].confirm

Vue.config.productionTip = false

new Vue({
    render: h => h(app),
    router
}).$mount('#app')
