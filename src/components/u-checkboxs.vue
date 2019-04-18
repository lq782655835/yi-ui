<template>
    <div class="u-checkboxs">
        <u-checkbox
            v-for="(item, index) in list"
            :key="index"
            :label="item[labelField]"
            :checked.sync="item[checkedField]"
            :disabled="disabled || item[disabledField]"
            @change="checkboxChanged"
        />
    </div>
</template>

<script>
export default {
    name: 'u-checkboxs',
    props: {
        list: { type: Array, default: () => [] },
        labelField: { type: String, default: 'label' },
        checkedField: { type: String, default: 'checked' },
        disabledField: { type: String, default: 'disabled' },
        disabled: { type: Boolean, default: false }
    },
    methods: {
        checkboxChanged() {
            this.$emit('change', this.list)
        }
    }
}
</script>
