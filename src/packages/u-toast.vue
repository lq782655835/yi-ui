<template>
    <div v-if="showToast" class="u-toast">
        <div class="content">
            <span :class="['icon', type]">!</span> <span :class="['text', type]">{{ text }}</span>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

const Toast = {
    name: 'u-toast',
    props: {
        text: { type: String, default: '' },
        type: {
            type: String,
            default: 'success',
            validator: value => ['success', 'error'].indexOf(value) !== -1
        }
    },
    data() {
        return {
            showToast: false,
            timer: ''
        }
    },
    mounted() {
        document.body.appendChild(this.$el)
    },
    methods: {
        show(text = '', type = 'success', delay = 3500) {
            this.showToast = true
            if (!this.$el) this.$mount(document.createElement('div'))

            this.type = type
            this.text = text

            // 指定时间后关闭
            this.timer && clearTimeout(this.timer)
            this.timer = setTimeout(() => (this.showToast = false), delay)
        }
    }
}

Toast.toast = (...options) => {
    const Ctor = Vue.component('UToast')
    if (!Ctor) return
    let instance = new Ctor()
    instance.show(...options)
}
export default Toast
</script>

<style lang="scss" scoped>
.u-toast {
    position: fixed;
    top: 56px;
    left: 0;
    right: 0;
    margin: auto;
    min-width: 300px;
    width: 300px;
    height: 100px;
    z-index: 199;

    .content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 17px 40px;
        background: #eff4fa;
        border-radius: 2px;

        .icon {
            display: inline-block;
            position: absolute;
            width: 16px;
            height: 16px;
            line-height: 16px;
            margin-right: 8px;
            border-radius: 16px;
            vertical-align: bottom;
            text-align: center;
            color: #fefefe;
            font-size: 12px;
            font-weight: bold;

            &.success {
                background: $success-color;
            }

            &.error {
                background: $danger-color;
            }
        }

        .text {
            max-width: 196px;
            margin-left: 24px;
            font-size: 14px;

            &.success {
                color: $success-color;
            }

            &.error {
                color: $danger-color;
            }
        }
    }
}
</style>
