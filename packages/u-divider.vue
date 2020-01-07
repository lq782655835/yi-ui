<template functional>
    <div
        v-bind="data.attrs"
        v-on="listeners"
        :class="[data.staticClass, 'u-divider', `u-divider--${props.direction}`]"
    >
        <div
            v-if="slots().default && props.direction !== 'vertical'"
            :class="['u-divider__text', `is-${props.contentPosition}`]"
        >
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'u-divider',
    props: {
        direction: {
            type: String,
            default: 'horizontal',
            validator(val) {
                return ['horizontal', 'vertical'].indexOf(val) !== -1
            }
        },
        contentPosition: {
            type: String,
            default: 'center',
            validator(val) {
                return ['left', 'center', 'right'].indexOf(val) !== -1
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@include b(divider) {
    background-color: $border-color;
    position: relative;

    @include m(horizontal) {
        display: block;
        height: 1px;
        width: 100%;
        margin: 24px 0;
    }

    @include m(vertical) {
        display: inline-block;
        width: 1px;
        height: 1em;
        margin: 0 8px;
        vertical-align: middle;
        position: relative;
    }

    @include e(text) {
        position: absolute;
        background-color: $white;
        padding: 0 20px;
        font-weight: 500;
        color: $--color-text-primary;
        font-size: 14px;

        @include when(left) {
            left: 20px;
            transform: translateY(-50%);
        }

        @include when(center) {
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
        }

        @include when(right) {
            right: 20px;
            transform: translateY(-50%);
        }
    }
}
</style>
