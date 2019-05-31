import Vue from 'vue'
import { shallowMount, createWrapper } from '@vue/test-utils'
// global component
import YIUI from '../lib'
Vue.use(YIUI)

let id = 0
const createElm = function() {
    const elm = document.createElement('div')

    elm.id = 'app' + ++id
    document.body.appendChild(elm)

    return elm
}

export const getWrapperFactory = (Ctor, propsData = {}) => {
    return shallowMount(Ctor, { propsData })
}

export const createVueWrapper = function(Compo, mounted = false) {
    const Constructor = Vue.extend(Compo)
    let vm = new Constructor().$mount(mounted === false ? null : createElm())
    return createWrapper(vm)
}
