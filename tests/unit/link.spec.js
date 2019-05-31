import { getWrapperFactory, createVueWrapper } from '../util.js'
import Link from '@/components/u-link.vue'

describe('Link', () => {
    let wrapper

    it('name', () => {
        expect(Link.name).toBe('u-link')
    })

    it('class', () => {
        wrapper = getWrapperFactory(Link)
        expect(wrapper.classes('u-link')).toBe(true)
    })

    it('disabled', () => {
        wrapper = getWrapperFactory(Link, {
            disabled: true
        })
        expect(wrapper.attributes('disabled')).toBe('disabled')
    })

    it('href', () => {
        let href = 'https://baidu.com'
        wrapper = getWrapperFactory(Link, {
            href
        })
        expect(wrapper.attributes('href')).toBe(href)
    })

    it('to', () => {
        let to = '/demo'
        wrapper = getWrapperFactory(Link, {
            to
        })
        expect(wrapper.vm.to).toBe(to)
    })

    it('slot', () => {
        let slot = 'netease'
        wrapper = createVueWrapper(
            {
                template: `
                <u-link>${slot}</u-link>
            `
            },
            true
        )
        expect(wrapper.vm.$el.textContent).toBe(slot)
    })

    it('click', done => {
        let result
        wrapper = createVueWrapper(
            {
                template: `
                <u-link @click="clickEvent"></u-link>
            `,
                methods: {
                    clickEvent: function(e) {
                        result = e
                    }
                }
            },
            true
        )
        wrapper.vm.$el.click()
        setTimeout(function() {
            expect(result).toBeDefined()
            done()
        }, 20)
    })
})
