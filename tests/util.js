import Vue from 'vue'
import { shallowMount, createWrapper } from '@vue/test-utils'
// global component
import YIUI from '../packages'
Vue.use(YIUI)

export const getWrapperFactory = (Ctor, propsData = {}, attachToDocument = true) => {
    return shallowMount(Ctor, { propsData, attachToDocument })
}

export const createVueWrapper = (Compo, attachedToDocument = true) => {
    const Constructor = Vue.extend(Compo)
    let vm = new Constructor().$mount()
    return createWrapper(vm, { attachedToDocument })
}

export const destroyWrapper = wrapper => {
    wrapper && wrapper.destroy()
}
