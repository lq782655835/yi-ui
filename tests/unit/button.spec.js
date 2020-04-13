import { getWrapperFactory, createVueWrapper, destroyWrapper } from '../util.js'
import YIUI from '../../packages'
const Button = YIUI.UButton

describe('Button', () => {
    let wrapper

    afterEach(() => {
        destroyWrapper(wrapper)
    })

    it('class', () => {
        wrapper = getWrapperFactory(Button)
        expect(wrapper.classes('u-button')).toBe(true)
    })

    it('disabled', () => {
        wrapper = getWrapperFactory(Button, {
            disabled: true
        })
        expect(wrapper.attributes('disabled')).toBe('disabled')
    })

    it('href', () => {
        let href = 'https://baidu.com'
        wrapper = getWrapperFactory(Button, {
            href
        })
        expect(wrapper.attributes('href')).toBe(href)
    })

    it('to', () => {
        let to = '/demo'
        wrapper = getWrapperFactory(Button, {
            to
        })
        expect(wrapper.vm.to).toBe(to)
    })

    it('color', () => {
        let color = 'primary'
        wrapper = getWrapperFactory(Button, {
            color
        })
        expect(wrapper.attributes('color')).toBe(color)
    })

    it('size', () => {
        let size = 'l'
        wrapper = getWrapperFactory(Button, {
            size
        })
        expect(wrapper.attributes('size')).toBe(size)
    })

    it('slot', () => {
        let slot = 'netease'
        wrapper = createVueWrapper(
            {
                template: `
                <u-button>${slot}</u-button>
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
                <u-button @click="clickEvent"></u-button>
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
                <u-button @click="clickEvent"><p class="inner">test</p></u-button>
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
                <u-button @click="clickEvent" disabled></u-button>
            `,
            methods: {
                clickEvent: function(e) {
                    result = e
                }
            }
        })
        wrapper.trigger('click')
        setTimeout(function() {
            expect(result).toBeUndefined()
            done()
        }, 20)
    })
})
