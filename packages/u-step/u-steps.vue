<template>
    <div class="u-steps">
        <ul class="u-steps-nav">
            <li
                v-for="(itemVM, index) in itemVMs"
                :key="index"
                :class="['u-step', `u-step${index}`, { selected: index === activeIndex }]"
                v-on="listeners"
                @click.prevent="handleClick(index, itemVM)"
            >
                {{ itemVM.title }}
            </li>
        </ul>
        <div class="u-steps-content"><slot></slot></div>
    </div>
</template>

<script>
import UTabs from '../u-tab/u-tabs'
export default {
    name: 'u-steps',
    childName: 'u-step',
    mixins: [UTabs],
    props: {
        disabled: { type: Boolean, default: true } // 默认true
    }
}
</script>

<style lang="scss">
.u-steps {
    overflow: hidden; // TODO: override style
    &-nav {
        .u-step0 {
            z-index: 5;
        }

        .u-step1 {
            z-index: 4;
        }

        .u-step2 {
            z-index: 3;
        }

        .u-step {
            position: relative;
            display: inline-block;
            width: 150px;
            line-height: 35px;
            text-align: center;
            background: #f2f2f2;

            &.selected {
                background: #cce6ff;
                &:after {
                    border-color: transparent transparent transparent #cce6ff;
                }
            }

            &:before {
                content: '';
                height: 0px;
                width: 0px;
                display: inline-block;
                border: 18.5px solid;
                border-color: transparent transparent transparent #fff;
                position: absolute;
                right: -37px;
                top: -1px;
            }

            &:after {
                content: '';
                height: 0px;
                width: 0px;
                display: inline-block;
                border: 17.5px solid;
                border-color: transparent transparent transparent #f2f2f2;
                position: absolute;
                right: -34px;
            }
        }
    }
    &-content {
        padding-top: 30px;
    }
}
</style>
