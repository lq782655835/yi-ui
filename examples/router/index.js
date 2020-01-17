import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import routes from './routes'
Vue.use(VueRouter)

NProgress.configure({ showSpinner: false })
const router = new VueRouter({
    routes,
    linkActiveClass: 'is-active',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

// 全局路由配置
router.beforeEach((to, from, next) => {
    NProgress.done().start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router
