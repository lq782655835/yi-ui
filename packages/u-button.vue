<template>
    <a
        class="u-button"
        v-on="listeners"
        :autofocus="autofocus"
        :href="href"
        :disabled="disabled"
        :round="round"
        :circle="circle"
        @click="onClick"
    >
        <u-icon v-if="icon" :name="icon" />
        <span v-if="$slots.default"><slot></slot></span>
    </a>
</template>

<script>
import ULink from './u-link.vue'

export default {
    name: 'u-button',
    mixins: [ULink],
    props: {
        icon: String,
        autofocus: Boolean,
        round: Boolean,
        circle: Boolean
    }
}
</script>

<style lang="scss" scoped>
.u-button {
    position: relative;
    text-align: center;
    cursor: pointer;
    user-select: none;
    display: inline-block;
    padding: 10px 20px;
    border: 1px solid $border-color;
    border-radius: 4px;
    background-color: #ffffff;
    letter-spacing: 0;
    line-height: 1;

    &:hover {
        border: 1px solid $primary-color;
        color: $primary-color;
    }

    /* size大小 */
    &[size='l'] {
        padding: 12px 20px;
    }

    &[size='s'] {
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
    }

    &[size='xs'] {
        padding: 7px 15px;
        font-size: 12px;
        border-radius: 3px;
    }

    /* round圆角 */
    &[round] {
        border-radius: 20px;
    }
    &[circle] {
        border-radius: 50%;
        padding: 10px;
    }

    /* type类型 */
    @each $name, $color in $colors {
        &[type='#{$name}'] {
            border: 1px solid $color;
            background: $color;
            color: #ffffff;
        }
    }
    &[type='text'] {
        color: $primary-color;
        background: 0 0;
        padding: 0;
        border: none;

        &[disabled] {
            color: $disabled-color;
            background: 0 0;
            border: none;
        }
    }

    /*禁用*/
    &[disabled] {
        cursor: not-allowed;
        background: $disabled-color;
        border: 1px solid $disabled-color;
        color: #ffffff;
    }

    & + .u-button {
        margin-left: 10px;
    }

    [class*='u-icon-'] + span {
        margin-left: 5px;
    }
}
</style>
