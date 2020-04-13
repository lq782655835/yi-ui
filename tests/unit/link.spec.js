import { getWrapperFactory, createVueWrapper, destroyWrapper } from '../util.js'
import YIUI from '../../packages'
const Link = YIUI.ULink

describe('Link', () => {
    let wrapper

    afterEach(() => {
        destroyWrapper(wrapper)
    })

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

    it('color', () => {
        wrapper = getWrapperFactory(Link, {
            color: 'primary'
        })
        expect(wrapper.attributes('color')).toBe('primary')
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
        expect(wrapper.vm.$el.textContent.trim()).toBe(slot)
    })

    it('click', done => {
        let result
        wrapper = createVueWrapper({
            template: `
                <u-link @click="clickEvent"></u-link>
            `,
            methods: {
                clickEvent: function(e) {
                    result = e
                }
            }
        })
        wrapper.vm.$el.click()
        setTimeout(function() {
            expect(result).toBeDefined()
            done()
        }, 20)
    })

    it('click inner', done => {
        let result
        wrapper = createVueWrapper({
            template: `
                <u-link @click="clickEvent"><p class="inner">test</p></u-link>
            `,
            methods: {
                clickEvent: function(e) {
                    result = e
                }
            }
        })
        wrapper.vm.$el.querySelector('.inner').click()
        setTimeout(function() {
            expect(result).toBeDefined()
            done()
        }, 20)
    })

    it('click disabled', done => {
        let result
        wrapper = createVueWrapper({
            template: `
                <u-link @click="clickEvent" disabled></u-link>
            `,
            methods: {
                clickEvent: function(e) {
                    result = e
                }
            }
        })
        wrapper.vm.$el.click()
        setTimeout(function() {
            expect(result).toBeUndefined()
            done()
        }, 20)
    })
})
