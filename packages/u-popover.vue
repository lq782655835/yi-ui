<template>
    <u-popper
        ref="popper"
        :trigger="trigger"
        :placement="placement"
        :reference="reference"
        :open="open"
        v-on="$listeners"
        :disabled="disabled"
    >
        <slot></slot>
        <div class="root popper" slot="popper" :merge-borders="mergeBorders">
            <span class="arrow"></span>
            <slot name="popper">
                <div>
                    <div class="head" v-if="title || $slots.head || $slots.title">
                        <slot name="head">
                            <div class="title">
                                <slot name="title">{{ title }}</slot>
                            </div>
                        </slot>
                    </div>
                    <div class="body" v-if="content || $slots.body || $slots.content">
                        <slot name="body">
                            <slot name="content">{{ content }}</slot>
                        </slot>
                    </div>
                    <div class="foot" v-if="$slots.foot"><slot name="foot"></slot></div>
                </div>
            </slot>
        </div>
    </u-popper>
</template>

<script>
export default {
    name: 'u-popover',
    props: {
        title: String,
        content: String,
        open: { type: Boolean, default: false },
        trigger: { type: String, default: 'click' },
        placement: { type: String, default: 'bottom-start' },
        reference: Object, // 为了方便生成指令
        disabled: { type: Boolean, default: false },
        mergeBorders: { type: Boolean, default: true }
    },
    methods: {
        update() {
            this.$refs.popper.update()
        },
        toggle(open) {
            this.$refs.popper.toggle(open)
        }
    }
}
</script>

<style lang="scss" scoped>
$popup-background-color: white;
$popup-background-head-color: white;
$popup-border-color: #dfe4ec;
$popup-arrow-size: 8px;
$popup-outer-arrow-size: 9px;
$popup-arrow-offset: 16px;

.root {
    position: relative;
    min-width: 200px;
    background: $popup-background-color;
    border: 1px solid $popup-border-color;
    z-index: 7000;
}

.head {
    padding: 6px 10px;
    background: $popup-background-head-color;
    border-bottom: 1px solid $popup-border-color;
}

.title {
    font-weight: bold;

    .u-icon.close {
        position: absolute;
        right: 8px;
        top: 8px;
    }
}

.body {
    padding: 6px 10px;
}

.foot {
    border-top: 1px solid $popup-border-color;
    padding: 6px 10px;
}

.arrow {
    display: block;
    position: absolute;
    border: $popup-arrow-size solid transparent;
}
.arrow::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    border: $popup-outer-arrow-size solid transparent;
}

.root[x-placement^='top'] {
    margin-bottom: $popup-arrow-size;
}
.root[x-placement^='top'] .arrow {
    bottom: -$popup-arrow-size;
    margin-left: -$popup-arrow-size;
    border-width: $popup-arrow-size $popup-arrow-size 0;
    border-top-color: $popup-background-color;
}
.root[x-placement^='top'] .arrow::before {
    bottom: -1px;
    left: -1px;
    margin-left: -$popup-arrow-size;
    border-width: $popup-outer-arrow-size $popup-outer-arrow-size 0;
    border-top-color: $popup-border-color;
}
.root[x-placement='top-start'] .arrow {
    left: $popup-arrow-offset;
}
.root[x-placement='top'] .arrow {
    left: 50%;
}
.root[x-placement='top-end'] .arrow {
    right: $popup-arrow-offset;
}

.root[x-placement^='bottom'] {
    margin-top: $popup-arrow-size;
}
.root[x-placement^='bottom'] .arrow {
    top: -$popup-arrow-size;
    margin-left: -$popup-arrow-size;
    border-width: 0 $popup-arrow-size $popup-arrow-size;
    border-bottom-color: $popup-background-color;
}
.root[x-placement^='bottom'] .arrow::before {
    top: -1px;
    left: -1px;
    margin-left: -$popup-arrow-size;
    border-width: 0 $popup-outer-arrow-size $popup-outer-arrow-size;
    border-bottom-color: $popup-border-color;
}
.root[x-placement='bottom-start'] .arrow {
    left: $popup-arrow-offset;
}
.root[x-placement='bottom'] .arrow {
    left: 50%;
}
.root[x-placement='bottom-end'] .arrow {
    right: $popup-arrow-offset;
}

.root[x-placement^='left'] {
    margin-right: $popup-arrow-size;
}
.root[x-placement^='left'] .arrow {
    right: -$popup-arrow-size;
    margin-top: -$popup-arrow-size;
    border-width: $popup-arrow-size 0 $popup-arrow-size $popup-arrow-size;
    border-left-color: $popup-background-color;
}
.root[x-placement^='left'] .arrow::before {
    top: -1px;
    right: -1px;
    margin-top: -$popup-arrow-size;
    border-width: $popup-outer-arrow-size 0 $popup-outer-arrow-size $popup-outer-arrow-size;
    border-left-color: $popup-border-color;
}
.root[x-placement='left-start'] .arrow {
    top: $popup-arrow-offset;
}
.root[x-placement='left'] .arrow {
    top: 50%;
}
.root[x-placement='left-end'] .arrow {
    bottom: $popup-arrow-offset;
}

.root[x-placement^='right'] {
    margin-left: $popup-arrow-size;
}
.root[x-placement^='right'] .arrow {
    left: -$popup-arrow-size;
    margin-top: -$popup-arrow-size;
    border-width: $popup-arrow-size $popup-arrow-size $popup-arrow-size 0;
    border-right-color: $popup-background-color;
}
.root[x-placement^='right'] .arrow::before {
    top: -1px;
    left: -1px;
    margin-top: -$popup-arrow-size;
    border-width: $popup-outer-arrow-size $popup-outer-arrow-size $popup-outer-arrow-size 0;
    border-right-color: $popup-border-color;
}
.root[x-placement='right-start'] .arrow {
    top: $popup-arrow-offset;
}
.root[x-placement='right'] .arrow {
    top: 50%;
}
.root[x-placement='right-end'] .arrow {
    bottom: $popup-arrow-offset;
}

.root[merge-borders] .arrow ~ * {
    border: none;
    box-shadow: none;
}
</style>
