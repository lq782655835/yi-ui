<template>
    <li class="u-crumb-item">
        <a
            class="text"
            :class="to || href ? 'link' : ''"
            :disabled="disabled"
            :href="href"
            @click="onClick"
            v-on="listeners"
        >
            <slot></slot>
        </a>
        <i v-if="separatorClass" class="separator material-icons">{{ separatorClass }}</i>
        <span v-else class="separator">{{ separator }}</span>
    </li>
</template>

<script>
import ULink from '../u-link.vue'

export default {
    name: 'u-crumb-item',
    mixins: [ULink],
    data() {
        return {
            separator: '',
            separatorClass: ''
        }
    },

    inject: ['uCrumb'],

    mounted() {
        this.separator = this.uCrumb.separator
        this.separatorClass = this.uCrumb.separatorClass
    }
}
</script>

<style lang="scss" scoped>
.u-crumb-item {
    display: inline;

    &:last-child {
        .separator {
            display: none;
        }
    }

    .text {
        font-size: 14px;
        letter-spacing: 0;
        text-align: left;
        cursor: default;

        &.link {
            color: $primary-color;

            &:not([disabled='disabled']):hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }

        &[disabled='disabled'] {
            cursor: not-allowed;
            color: $disabled-color;
        }
    }

    .separator {
        margin: 0 9px;
    }
}
</style>
