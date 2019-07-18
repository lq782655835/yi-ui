<template>
    <div class="u-radio" :disabled="disabled" @click="radioClick">
        <input type="radio" :checked="checkValue" :disabled="disabled" /> <slot>{{ label }}</slot>
    </div>
</template>

<script>
export default {
    name: 'u-radio',
    props: {
        checked: { type: Boolean, default: false },
        label: { type: String, default: '' },
        disabled: { type: Boolean, default: false }
    },
    model: {
        prop: 'checked',
        event: 'change'
    },
    data() {
        return {
            checkValue: this.checked
        }
    },
    watch: {
        checked(val) {
            this.checkValue = val
        }
    },
    methods: {
        radioClick() {
            if (this.disabled) return
            if (this.checkValue) return

            this.checkValue = !this.checkValue
            this.$emit('update:checked', this.checkValue) // allow sync
            this.$emit('change', this.checkValue) // allow v-modal
        }
    }
}
</script>

<style lang="scss" scoped>
.u-radio {
    display: inline-block;
    user-select: none;

    &[disabled] {
        cursor: not-allowed;
        color: $disabled-color;
    }

    input {
        margin-right: 8px;
    }
}
</style>
