// import YIUI from 'yi-ui'
// import 'yi-ui/dist/YIUI.css'
import YIUI from '../../../packages/index' // 需要配置scss环境
export default ({ Vue }) => {
    // eslint-disable-next-line vue/match-component-file-name
    Vue.use(YIUI)
}
