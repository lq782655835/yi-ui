import Vue from 'vue'
import app from './app.vue'
import router from './router'

// 注册全局组件
import * as YIUI from './entry'
Object.keys(YIUI).forEach(key => {
    Vue.component(key, YIUI[key])
    if (key === 'UToast') {
        Vue.prototype.$toast = YIUI[key].toast
    }
    if (key === 'UModal') {
        Vue.prototype.$confirm = YIUI[key].confirm
        Vue.prototype.$alert = YIUI[key].alert
    }
})

Vue.config.productionTip = false

new Vue({
    render: h => h(app),
    router
}).$mount('#app')