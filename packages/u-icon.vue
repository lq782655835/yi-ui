<template>
    <a
        :class="'u-icon-' + name"
        class="u-icon material-icons"
        :style="style"
        :size="size"
        v-on="listeners"
        @click="onClick"
        :href="href"
        :disabled="disabled"
    >
        {{ name }}
    </a>
</template>

<script>
import ULink from './u-link'

export default {
    name: 'u-icon',
    mixins: [ULink],
    props: {
        name: { type: String, required: true },
        color: { type: String },
        size: { type: String }
    },
    computed: {
        style() {
            let style = {}
            if (this.color) {
                style.color = this.color
            }
            if (this.size && !['s', 'l'].includes(this.size)) {
                style.fontSize = this.size
            }
            return style
        }
    }
}
</script>

<style lang="scss">
@import '~material-design-icons/iconfont/material-icons.css';

.u-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: text-bottom; /* align icon and text*/

    &[size='s'] {
        font-size: 14px;
    }

    &[size='l'] {
        font-size: 24px;
    }

    &[disabled] {
        cursor: not-allowed;
    }
}
</style>
