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
    provide() {
        return {
            elFormItem: this
        }
    },
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
            this.$once('hook:beforeDestroy', () => this.uForm.$emit('form.removeField', this))

            this.addValidateEvents()
        }
    },
    methods: {
        validate(trigger, callback = () => {}) {
            this.validateState = 'validating'
            let rulesByFilterTrigger = trigger => {
                const rules = this.getRules()
                const filterTriggerRules = rules.filter(rule => {
                    let { trigger: innerTrigger } = rule
                    if (trigger === '' || !innerTrigger) return true
                    return Array.isArray(innerTrigger)
                        ? innerTrigger.includes(trigger)
                        : innerTrigger === trigger
                })
                return filterTriggerRules
            }

            var validator = new Schema({
                [this.prop]: rulesByFilterTrigger(trigger) // TODO: nest prop
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
        },
        addValidateEvents() {
            let rules = this.getRules()
            if (rules.length === 0) return

            this.$on('el.form.blur', () => this.validate('blur'))
            this.$on('el.form.change', () => this.validate('change'))
        },
        getRules() {
            return [].concat(this.uForm.rules[this.prop])
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
