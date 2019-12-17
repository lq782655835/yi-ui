<template>
    <div v-if="!lazy || loaded || show" v-show="show" class="u-tab"><slot></slot></div>
</template>

<script>
import ULink from '../u-link'

export default {
    name: 'u-tab',
    mixins: [ULink],
    props: {
        title: { type: String, default: '' },
        lazy: { type: Boolean, default: false }
    },
    data() {
        return {
            index: -1,
            loaded: false
        }
    },
    computed: {
        show() {
            const active = parseInt(this.index) === parseInt(this.$parent.activeIndex)
            if (active) {
                this.loaded = true // eslint-disable-line
            }
            return active
        }
    },
    created() {
        if (this.$parent.itemVMs) {
            this.$parent.itemVMs.push(this)
        }
    },
    mounted() {
        this.$nextTick(() => {
            for (let c in this.$parent.$children) {
                if (this.$parent.$children[c].$el === this.$el) {
                    this.index = c
                    break
                }
            }
        })
    }
}
</script>

<style lang="scss"></style>
