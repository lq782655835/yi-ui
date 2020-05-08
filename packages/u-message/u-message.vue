<template>
    <transition name="u-message-fade" @after-leave="handleAfterLeave">
        <div
            :class="[
                'u-message',
                type && !iconClass ? `u-message--${type}` : '',
                center ? 'is-center' : '',
                showClose ? 'is-closable' : '',
                customClass
            ]"
            :style="positionStyle"
            v-show="visible"
            @mouseenter="clearTimer"
            @mouseleave="startTimer"
            role="alert"
        >
            <i :class="iconClass" v-if="iconClass"></i>
            <i :class="typeClass" v-else></i>
            <slot>
                <p v-if="!dangerouslyUseHTMLString" class="u-message__content">{{ message }}</p>
                <p v-else v-html="message" class="u-message__content"></p>
            </slot>
            <i v-if="showClose" class="u-message__closeBtn u-icon-close" @click="close"></i>
        </div>
    </transition>
</template>

<script type="text/babel">
const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
}
export default {
    data() {
        return {
            visible: false,
            message: '',
            duration: 3000,
            type: 'info',
            iconClass: '',
            customClass: '',
            onClose: null,
            showClose: false,
            closed: false,
            verticalOffset: 20,
            timer: null,
            dangerouslyUseHTMLString: false,
            center: false
        }
    },
    computed: {
        typeClass() {
            return this.type && !this.iconClass
                ? `u-message__icon u-icon-${typeMap[this.type]}`
                : ''
        },
        positionStyle() {
            return {
                top: `${this.verticalOffset}px`
            }
        }
    },
    watch: {
        closed(newVal) {
            if (newVal) {
                this.visible = false
            }
        }
    },
    methods: {
        handleAfterLeave() {
            this.$destroy(true)
            this.$el.parentNode.removeChild(this.$el)
        },
        close() {
            this.closed = true
            if (typeof this.onClose === 'function') {
                this.onClose(this)
            }
        },
        clearTimer() {
            clearTimeout(this.timer)
        },
        startTimer() {
            if (this.duration > 0) {
                this.timer = setTimeout(() => {
                    if (!this.closed) {
                        this.close()
                    }
                }, this.duration)
            }
        },
        keydown(e) {
            if (e.keyCode === 27) {
                // esc关闭消息
                if (!this.closed) {
                    this.close()
                }
            }
        }
    },
    mounted() {
        this.startTimer()
        document.addEventListener('keydown', this.keydown)
    },
    beforeDestroy() {
        document.removeEventListener('keydown', this.keydown)
    }
}
</script>

<style>
.u-message__closeBtn:focus,
.u-message__content:focus {
    outline-width: 0;
}
.u-message {
    min-width: 380px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: #ebeef5;
    position: fixed;
    left: 50%;
    top: 20px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color: #edf2fc;
    -webkit-transition: opacity 0.3s, top 0.4s, -webkit-transform 0.4s;
    transition: opacity 0.3s, top 0.4s, -webkit-transform 0.4s;
    transition: opacity 0.3s, transform 0.4s, top 0.4s;
    transition: opacity 0.3s, transform 0.4s, top 0.4s, -webkit-transform 0.4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.u-message.is-center {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.u-message.is-closable .u-message__content {
    padding-right: 16px;
}
.u-message p {
    margin: 0;
}
.u-message--info .u-message__content {
    color: #909399;
}
.u-message--success {
    background-color: #f0f9eb;
    border-color: #e1f3d8;
}
.u-message--success .u-message__content {
    color: #67c23a;
}
.u-message--warning {
    background-color: #fdf6ec;
    border-color: #faecd8;
}
.u-message--warning .u-message__content {
    color: #e6a23c;
}
.u-message--error {
    background-color: #fef0f0;
    border-color: #fde2e2;
}
.u-message--error .u-message__content {
    color: #f56c6c;
}
.u-message__icon {
    margin-right: 10px;
}
.u-message__content {
    padding: 0;
    font-size: 14px;
    line-height: 1;
}
.u-message__closeBtn {
    position: absolute;
    top: 50%;
    right: 15px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    cursor: pointer;
    color: #c0c4cc;
    font-size: 16px;
}
.u-message__closeBtn:hover {
    color: #909399;
}
.u-message .u-icon-success {
    color: #67c23a;
}
.u-message .u-icon-error {
    color: #f56c6c;
}
.u-message .u-icon-info {
    color: #909399;
}
.u-message .u-icon-warning {
    color: #e6a23c;
}
.u-message-fade-enter,
.u-message-fade-leave-active {
    opacity: 0;
    -webkit-transform: translate(-50%, -100%);
    transform: translate(-50%, -100%);
}
</style>
