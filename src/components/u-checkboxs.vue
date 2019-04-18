<template>
    <div class="u-checkboxs">
        <u-checkbox
            v-for="(item, index) in formatList"
            :key="index"
            :label="item.label"
            :checked="item.checked"
            :disabled="disabled"
            @change="checkboxChanged($event, item)"
        />
    </div>
</template>

<script>
export default {
    name: 'u-checkboxs',
    props: {
        value: { type: Array, default: () => [] },
        list: { type: Array, default: () => [] },
        labelField: { type: String, default: 'label' },
        valueField: { type: String, default: 'value' },
        disabled: { type: Boolean, default: false }
    },
    data() {
        return {
            selectList: this.value
        }
    },
    computed: {
        formatList() {
            return this.list.map(item =>
                Object.assign({}, item, {
                    label: item[this.labelField],
                    value: item[this.valueField],
                    checked: this.value.some(val => val == item[this.valueField])
                })
            )
        }
    },
    methods: {
        checkboxChanged(isChecked, item) {
            console.log(e, item)
        }
    }
}
</script>
