// base
import URender from './u-render'
import ULink from './u-link'
import UButton from './u-button'
import UButtonGroup from './u-button-group'
import UIcon from './u-icon'
import ULayout from './u-layout'

// form
import UInput from './u-input'
import USelect from './u-select'
import USwitch from './u-switch'
import UCheckbox from './u-checkbox/u-checkbox'
import UCheckboxs from './u-checkbox/u-checkboxs'
import URadio from './u-radio/u-radio'
import URadios from './u-radio/u-radios'
import UForm from './u-form/u-form'
import UFormItem from './u-form/u-form-item'

// usage
import UTableColumn from './u-table/u-table-column'
import UTable from './u-table/u-table'
import UPagination from './u-pagination'
import UTab from './u-tab/u-tab'
import UTabs from './u-tab/u-tabs'
import UCrumb from './u-crumb/u-crumb.vue'
import UCrumbItem from './u-crumb/u-crumb-item.vue'
import UStep from './u-step/u-step'
import USteps from './u-step/u-steps'

// popup
import UModal from './u-modal'
import UToast from './u-toast'
import UPopper from './u-popper'
import UPopover from './u-popover'
import UTooltip from './u-tooltip'
import UMessage from './u-message'

import UDivider from './u-divider'
import UBackTop from './u-back-top'
import UTransition from './u-transition.js'
import { version } from '../package.json'

import './assets/css/index.scss'

const components = {
    URender,
    ULink,
    UButton,
    UButtonGroup,
    UInput,
    USelect,
    UCheckbox,
    UCheckboxs,
    USwitch,
    ULayout,
    UTableColumn,
    UTable,
    UPagination,
    UTab,
    UTabs,
    UStep,
    USteps,
    UModal,
    UToast,
    UPopper,
    UPopover,
    UTooltip,
    URadio,
    URadios,
    UIcon,
    UForm,
    UFormItem,
    UCrumb,
    UCrumbItem,
    UDivider,
    UBackTop,
    UTransition,
    UMessage
}

const install = function(Vue, opts = {}) {
    Object.keys(components).forEach(key => Vue.component(key, components[key]))
    Vue.prototype.$toast = UToast.toast
    Vue.prototype.$confirm = UModal.confirm
    Vue.prototype.$alert = UModal.alert
    Vue.prototype.$message = UMessage

    Object.defineProperty(Vue.prototype, '$YIUI', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: opts
    })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    version,
    install,
    ...components
}
