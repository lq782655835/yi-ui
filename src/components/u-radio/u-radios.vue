<template>
    <div class="u-radios">
        <u-radio
            v-for="(item, index) in formatList"
            :key="index"
            :label="item.label"
            :checked="item.checked"
            :disabled="disabled"
            @change="valueChanged(item.value)"
        />
    </div>
</template>

<script>
export default {
    name: 'u-radios',
    props: {
        value: { type: [String, Number, Boolean], default: '' },
        list: { type: Array, default: () => [] },
        labelField: { type: String, default: 'label' },
        valueField: { type: String, default: 'value' },
        disabled: { type: Boolean, default: false }
    },
    data() {
        return {
            radioValue: this.value
        }
    },
    computed: {
        formatList() {
            return this.list.map(item =>
                Object.assign({}, item, {
                    label: item[this.labelField],
                    value: item[this.valueField],
                    checked: item[this.valueField] === this.radioValue
                })
            )
        }
    },
    watch: {
        value(val) {
            this.radioValue = val
        }
    },
    methods: {
        valueChanged(val) {
            let oldValue = this.radioValue
            this.radioValue = val

            this.$emit('change', { oldValue, newValue: this.radioValue })
            this.$emit('update:value', this.radioValue) // allow sync
            this.$emit('input', this.radioValue) // allow v-modal
        }
    }
}
</script>

<style lang="scss" scoped>
.u-radios {
    display: inline-block;

    .u-radio {
        padding: 0 5px;
    }
}
</style>
