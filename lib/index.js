import * as YIUI from '../dist/YIUI.common.js'
import '../dist/YIUI.css'

export default {
    install(Vue) {
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
    }
}

export * from '../index'
