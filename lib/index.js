import * as YIUI from '../dist/YIUI.common.js'
import '../dist/YIUI.css'

export default {
    install(Vue) {
        Object.keys(YIUI).forEach(key => Vue.component(key, YIUI[key]))
        Vue.prototype.$toast = YIUI['UToast'].toast
        Vue.prototype.$confirm = YIUI['UModal'].confirm
        Vue.prototype.$confirm = YIUI['UModal'].confirm
    }
}
