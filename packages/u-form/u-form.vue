<template>
    <div class="u-form">
        <!-- 标题区 -->
        <slot name="head">
            <div v-if="title" class="title">
                <slot name="title">{{ title }}</slot>
            </div>
        </slot>
        <!-- 内容区 -->
        <div class="u-form-body"><slot></slot></div>
        <!-- 操作区 -->
        <slot name="foot">
            <div class="u-form-foot u-form-ops" v-if="okButton || cancelButton">
                <u-button v-if="cancelButton" @click="$emit('cancel')">{{ cancelButton }}</u-button>
                <u-button v-if="okButton" @click="$emit('save')" type="primary">{{
                    okButton
                }}</u-button>
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'u-form',
    props: {
        title: String,
        labelWidth: String,
        contentWidth: String,
        okButton: { type: String, default: '确定' },
        cancelButton: { type: String, default: '取消' },
        model: Object, // form模型
        rules: Object
    },
    provide() {
        return {
            uForm: this
        }
    },
    data() {
        return {
            fields: [] // 需要prop验证的fields
        }
    },
    created() {
        this.$on('form.addField', field => this.fields.push(field))
        this.$on('form.removeField', field => this.fields.splice(this.fields.indexOf(field), 1))
    },
    methods: {
        validate(callback) {
            // promise,根据将来的callback，来确定resolve或者reject
            let promise
            if (window.Promise) {
                promise = new window.Promise((resolve, reject) => {
                    callback = valid => (valid ? resolve(valid) : reject(valid))
                })
            }

            if (this.fields.length === 0) {
                callback && callback(true)
            }

            let valid = true // 是否全部通过
            let invalidFields = {}
            this.fields.forEach((field, index) => {
                field.validate('', (msg, fields) => {
                    if (msg) valid = false
                    invalidFields = { ...invalidFields, ...fields }

                    // 由于validate是异步，所有异步都执行后再callback
                    if (index === this.fields.length - 1) {
                        callback && callback(valid, invalidFields)
                    }
                })
            })

            // 支持promise
            if (promise) return promise
        }
    }
}
</script>

<style lang="scss" scoped>
$margin-l: 32px;
$margin-m: 16px;
$margin-s: 8px;

.u-form {
    width: 100%;
    height: 100%;
    .title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 40px;
    }
    &-row {
        margin-bottom: $margin-m;
        position: relative;
    }

    &-ops {
        margin-top: 30px;
        padding-top: $margin-l;
        text-align: center;

        .u-button {
            margin: 0 10px;
            vertical-align: middle;
        }
    }

    &-label {
        display: inline-block;
        width: 20%;
        text-align: right;
        margin-right: $margin-s;
        vertical-align: top;
        line-height: 36px;
    }

    &-value {
        display: inline-block;
        width: 70%;
        text-align: left;
        min-height: 36px;
    }

    &-tip {
        font-size: 12px;
        color: #888;
    }

    &-error {
        font-size: 12px;
        color: $danger-color;
        position: absolute;
        bottom: -20px;
    }
}
</style>
