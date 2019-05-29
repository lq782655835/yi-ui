import { shallowMount } from '@vue/test-utils'
import Link from '@/components/u-link.vue'

const getWrapperFactory = (Ctor, propsData = {}) => {
    return shallowMount(Ctor, { propsData })
}

describe('Link', () => {
    it('name', () => {
        expect(Link.name).toBe('u-link')
    })

    it('class', () => {
        const wrapper = getWrapperFactory(Link)
        expect(wrapper.classes('u-link')).toBe(true)
    })

    it('disabled', () => {
        const wrapper = getWrapperFactory(Link, {
            disabled: true
        })
        expect(wrapper.attributes('disabled')).toEqual('disabled')
    })

    it('el', () => {
        const wrapper = getWrapperFactory(Link)
        const vm = wrapper.vm
        expect(typeof vm.onClick).toBe('function')
    })
})
