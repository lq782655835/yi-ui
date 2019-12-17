<template>
    <div class="u-form-item">
        <div class="item item-label" :style="leftSty">
            <span>{{ label }}</span
            ><i :class="required ? 'required' : 'quote'"></i>
        </div>
        <div class="item item-value" :style="rightSty">
            <slot></slot>
            <slot v-if="validateState === 'error'" name="error" :error="validateMessage">
                <div class="error">{{ validateMessage }}</div>
            </slot>
        </div>
    </div>
</template>

<script>
import Schema from 'async-validator'
export default {
    name: 'u-form-item',
    props: {
        label: String,
        prop: String, // model key
        required: Boolean
    },
    inject: ['uForm'],
    computed: {
        leftSty() {
            return {
                width: this.uForm.labelWidth
            }
        },
        rightSty() {
            return {
                width: this.uForm.contentWidth
            }
        },
        fieldValue() {
            const model = this.uForm.model
            if (!model || !this.prop) return

            return model[this.prop]
        }
    },
    data() {
        return {
            validateState: '',
            validateMessage: ''
        }
    },
    mounted() {
        if (this.prop) {
            this.uForm.$emit('form.addField', this)
            this.$once('hook:beforeDestroy', () => {
                this.uForm.$emit('form.removeField', this)
            })
        }
    },
    methods: {
        validate(callback = () => {}) {
            this.validateState = 'validating'

            var validator = new Schema({
                [this.prop]: this.uForm.rules[this.prop] // TODO: nest prop
            })
            validator.validate(
                { [this.prop]: this.fieldValue }, // TODO: nest prop
                { firstFields: true },
                (errors, invalidFields) => {
                    this.validateState = !errors ? 'success' : 'error'
                    this.validateMessage = errors ? errors[0].message : ''
                    callback(this.validateMessage, invalidFields)
                }
            )
        }
    }
}
</script>

<style lang="scss" scoped>
.u-form-item {
    margin-bottom: 20px;

    &:after {
        content: '.';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    .item {
        min-height: 36px;
        float: left;
    }

    .item-label {
        text-align: right;
        box-sizing: border-box;
        line-height: 36px;
        padding-right: 16px;
        white-space: nowrap;
        width: 120px;
    }
    .item-value {
        position: relative;
        line-height: 36px;
        .error {
            position: absolute;
            left: 0;
            top: 100%;
            bottom: -100%;
            margin: 5px auto;
            color: red;
            font-size: 12px;
            line-height: 12px;
        }

        .tip {
            padding-top: 4px;
            font-size: 12px;
            line-height: 12px;
        }
    }
    .quote {
        &:after {
            content: ':';
        }
    }
    .required {
        &:before {
            color: red;
            content: '*';
            font-size: 16px;
            vertical-align: middle;
        }
    }
}
</style>
