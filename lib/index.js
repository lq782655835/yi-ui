import * as YIUI from '../dist/YIUI.common.js'
import '../dist/YIUI.css'

export default {
  install (Vue) {
      Object.keys(YIUI).forEach(key => Vue.component(key, YIUI[key]))
  }
}