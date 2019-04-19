<template>
    <div class="u-checkbox" :disabled="disabled" @click="checkClick">
        <input type="checkbox" :checked="checkValue" :disabled="disabled" />
        <slot>{{ label }}</slot>
    </div>
</template>

<script>
export default {
    name: 'u-checkbox',
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
        checkClick() {
            if (this.disabled) return

            this.checkValue = !this.checkValue

            this.$emit('check', this.checkValue)
            this.$emit('update:checked', this.checkValue) // allow sync
            this.$emit('change', this.checkValue) // allow v-modal
        }
    }
}
</script>

<style lang="scss" scoped>
.u-checkbox {
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
