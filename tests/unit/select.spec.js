import { getWrapperFactory, createVueWrapper, destroyWrapper } from '../util.js'
import YIUI from '../../packages'
const Select = YIUI.USelect

describe('Select', () => {
    let wrapper

    afterEach(() => {
        destroyWrapper(wrapper)
    })

    it('disabled', () => {
        wrapper = getWrapperFactory(Select, {
            disabled: true
        })
        expect(wrapper.attributes('disabled')).toBe('disabled')
    })

    it('size', () => {
        let size = 'l'
        wrapper = getWrapperFactory(Select, {
            size
        })
        expect(wrapper.attributes('size')).toBe(size)
    })

    it('value', () => {
        wrapper = createVueWrapper({
            template: `
                <u-select
                :list="list"
                v-model="value"></u-select>
            `,
            data() {
                return {
                    list: [
                        {
                            label: '简写版select',
                            value: 1
                        },
                        {
                            label: '麻雀虽小',
                            value: 2
                        }
                    ],
                    value: 1
                }
            }
        })
        expect(wrapper.find('.label').text()).toBe('简写版select')
    })
})
