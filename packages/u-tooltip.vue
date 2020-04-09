<template>
    <u-popper
        ref="popper"
        :trigger="trigger"
        :placement="placement"
        :reference="reference"
        :hover-delay="hoverDelay"
        :offset="offset"
        :open="open"
        v-on="$listeners"
        :disabled="disabled || !hasContent"
    >
        <slot></slot>
        <div class="root popper" slot="popper">
            <span class="arrow"></span>
            <slot name="popper">
                <div class="body">
                    <slot name="body">
                        <slot name="content">{{ content }}</slot>
                    </slot>
                </div>
            </slot>
        </div>
    </u-popper>
</template>

<script>
export default {
    name: 'u-tooltip',
    props: {
        content: String,
        open: { type: Boolean, default: false },
        trigger: { type: String, default: 'hover' },
        placement: { type: String, default: 'bottom-start' },
        reference: Object, // 为了方便生成指令
        offset: { type: Number, default: 0 },
        disabled: { type: Boolean, default: false },
        hoverDelay: { type: Number, default: 0 }
    },
    computed: {
        hasContent() {
            return (
                (this.content !== undefined && this.content !== '') ||
                this.$slots.content !== undefined
            )
        }
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
$tooltip-background-color: #333;
$tooltip-arrow-size: 5px;
$tooltip-arrow-offset: 10px;

.root {
    position: relative;
    padding: 6px 15px;
    border-radius: 5px;
    background: $tooltip-background-color;
    color: white;
    font-size: 12px;
    z-index: 7000;
}

.arrow {
    display: block;
    position: absolute;
    border: $tooltip-arrow-size solid transparent;
}

.root[x-placement^='top'] {
    margin-bottom: $tooltip-arrow-size;
}
.root[x-placement^='top'] .arrow {
    bottom: -$tooltip-arrow-size;
    margin-left: -$tooltip-arrow-size;
    border-width: $tooltip-arrow-size $tooltip-arrow-size 0;
    border-top-color: $tooltip-background-color;
}
.root[x-placement='top-start'] .arrow {
    left: $tooltip-arrow-offset;
}
.root[x-placement='top'] .arrow {
    left: 50%;
}
.root[x-placement='top-end'] .arrow {
    right: $tooltip-arrow-offset;
}

.root[x-placement^='bottom'] {
    margin-top: $tooltip-arrow-size;
}
.root[x-placement^='bottom'] .arrow {
    top: -$tooltip-arrow-size;
    margin-left: -$tooltip-arrow-size;
    border-width: 0 $tooltip-arrow-size $tooltip-arrow-size;
    border-bottom-color: $tooltip-background-color;
}
.root[x-placement='bottom-start'] .arrow {
    left: $tooltip-arrow-offset;
}
.root[x-placement='bottom'] .arrow {
    left: 50%;
}
.root[x-placement='bottom-end'] .arrow {
    right: $tooltip-arrow-offset;
}

.root[x-placement^='left'] {
    margin-right: $tooltip-arrow-size;
}
.root[x-placement^='left'] .arrow {
    right: -$tooltip-arrow-size;
    margin-top: -$tooltip-arrow-size;
    border-width: $tooltip-arrow-size 0 $tooltip-arrow-size $tooltip-arrow-size;
    border-left-color: $tooltip-background-color;
}
.root[x-placement='left-start'] .arrow {
    top: $tooltip-arrow-offset;
}
.root[x-placement='left'] .arrow {
    top: 50%;
}
.root[x-placement='left-end'] .arrow {
    bottom: $tooltip-arrow-offset;
}

.root[x-placement^='right'] {
    margin-left: $tooltip-arrow-size;
}
.root[x-placement^='right'] .arrow {
    left: -$tooltip-arrow-size;
    margin-top: -$tooltip-arrow-size;
    border-width: $tooltip-arrow-size $tooltip-arrow-size $tooltip-arrow-size 0;
    border-right-color: $tooltip-background-color;
}
.root[x-placement='right-start'] .arrow {
    top: $tooltip-arrow-offset;
}
.root[x-placement='right'] .arrow {
    top: 50%;
}
.root[x-placement='right-end'] .arrow {
    bottom: $tooltip-arrow-offset;
}
</style>
