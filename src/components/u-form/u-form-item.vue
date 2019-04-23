<template>
    <div class="u-form-item">
        <div class="item item-label" :style="leftSty">
            <span>{{ label }}</span
            ><i :class="required ? 'required' : 'quote'"></i>
        </div>
        <div class="item item-value" :style="rightSty">
            <slot></slot>
            <div v-if="tip" class="tip">{{ tip }}</div>
            <div class="error">{{ error }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'u-form-item',
    props: {
        label: String,
        error: String,
        required: Boolean,
        tip: String
    },
    data() {
        return {
            leftSty: {},
            rightSty: {}
        }
    },
    created() {
        this.$parent.labelWidth && (this.leftSty.width = this.$parent.labelWidth)
        this.$parent.contentWidth && (this.rightSty.width = this.$parent.contentWidth)
    }
}
</script>

<style lang="scss" scoped>
.u-form-item {
    margin-bottom: 20px;

    &:after {
        content: '.';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    .item {
        min-height: 36px;
        float: left;
    }

    .item-label {
        text-align: right;
        box-sizing: border-box;
        line-height: 36px;
        padding-right: 16px;
        white-space: nowrap;
        width: 120px;
    }
    .item-value {
        position: relative;
        // width: calc(100% - 120px);
        line-height: 36px;
        .error {
            position: absolute;
            left: 0;
            top: 100%;
            bottom: -100%;
            margin: 5px auto;
            color: red;
            font-size: 12px;
            line-height: 12px;
        }

        .tip {
            padding-top: 4px;
            font-size: 12px;
            line-height: 12px;
        }
    }
    .quote {
        &:after {
            content: ':';
        }
    }
    .required {
        &:before {
            color: red;
            content: '*';
            font-size: 16px;
            vertical-align: middle;
        }
    }
}
</style>
