import { getWrapperFactory, createVueWrapper, destroyWrapper } from '../util.js'
import YIUI from '../../packages'
const Input = YIUI.UInput

describe('Input', () => {
    let wrapper

    afterEach(() => {
        destroyWrapper(wrapper)
    })

    it('type', () => {
        let type = 'textarea'
        wrapper = getWrapperFactory(Input, {
            type
        })
        expect(wrapper.classes('textarea')).toBe(true)
    })

    it('disabled', () => {
        wrapper = getWrapperFactory(Input, {
            disabled: true
        })
        expect(wrapper.find('input').attributes('disabled')).toBe('disabled')
    })

    it('size', () => {
        let size = 'l'
        wrapper = getWrapperFactory(Input, {
            size
        })
        expect(wrapper.attributes('size')).toBe(size)
    })

    it('value', () => {
        wrapper = createVueWrapper({
            template: `
                <u-input
                :minlength="3"
                :maxlength="5"
                placeholder="请输入内容"
                @focus="handleFocus"
                :value="input"></u-input>
            `,
            data() {
                return {
                    input: 'value',
                    inputFocus: false
                }
            },
            methods: {
                handleFocus() {
                    this.inputFocus = true
                }
            }
        })
        let vm = wrapper.vm
        let inputElm = vm.$el.querySelector('input')
        inputElm.focus()
        expect(vm.inputFocus).toBeTruthy()
        expect(inputElm.getAttribute('placeholder')).toBe('请输入内容')
        expect(inputElm.value).toBe('value')
        expect(inputElm.getAttribute('minlength')).toBe('3')
        expect(inputElm.getAttribute('maxlength')).toBe('5')

        // props
        wrapper.find('input').setValue('changed value')
        expect(inputElm.value).toBe('changed value')
    })

    it('v-model', () => {
        wrapper = createVueWrapper({
            template: `
                <u-input v-model="input"></u-input>
            `,
            data() {
                return {
                    input: 'init'
                }
            }
        })
        expect(wrapper.vm.input).toBe('init')

        wrapper.find('input').setValue('changed value')
        expect(wrapper.vm.input).toBe('changed value')
    })
})
