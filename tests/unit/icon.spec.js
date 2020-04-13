import { getWrapperFactory, createVueWrapper, destroyWrapper } from '../util.js'
import YIUI from '../../packages'
const Icon = YIUI.UIcon

describe('Icon', () => {
    let wrapper

    afterEach(() => {
        destroyWrapper(wrapper)
    })

    it('class', () => {
        wrapper = getWrapperFactory(Icon, { name: 'backup' })
        expect(wrapper.classes('u-icon')).toBe(true)
    })

    it('disabled', () => {
        wrapper = getWrapperFactory(Icon, {
            name: 'backup',
            disabled: true
        })
        expect(wrapper.attributes('disabled')).toBe('disabled')
    })

    it('href', () => {
        let href = 'https://baidu.com'
        wrapper = getWrapperFactory(Icon, {
            name: 'backup',
            href
        })
        expect(wrapper.attributes('href')).toBe(href)
    })

    it('to', () => {
        let to = '/demo'
        wrapper = getWrapperFactory(Icon, {
            name: 'backup',
            to
        })
        expect(wrapper.vm.to).toBe(to)
    })

    it('color', () => {
        let color = 'rgb(0, 0, 0)'
        wrapper = getWrapperFactory(Icon, {
            name: 'backup',
            color
        })
        expect(wrapper.vm.$el.style.color).toBe(color)
    })

    it('size', () => {
        let size = '12px'
        wrapper = getWrapperFactory(Icon, {
            name: 'backup',
            size
        })
        expect(wrapper.vm.$el.style.fontSize).toBe(size)
    })

    it('click', done => {
        let result
        wrapper = createVueWrapper({
            template: `
                <u-icon @click="clickEvent" name="backup"></u-icon>
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

    it('click disabled', done => {
        let result
        wrapper = createVueWrapper({
            template: `
                <u-icon @click="clickEvent" name="backup" disabled></u-icon>
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
