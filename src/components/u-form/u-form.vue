<template>
    <div class="u-form">
        <!-- 标题区 -->
        <slot name="head">
            <div v-if="title" class="title">
                <slot name="title">{{ title }}</slot>
            </div>
        </slot>
        <!-- 内容区 -->
        <div class="u-form-body">
            <slot></slot>
        </div>
        <!-- 操作区 -->
        <slot name="foot">
            <div class="u-form-foot u-form-ops" v-if="okButton || cancelButton">
                <u-button v-if="cancelButton" @click="$emit('cancel')">{{ cancelButton }}</u-button>
                <u-button v-if="okButton" @click="$emit('save')" color="primary">{{
                    okButton
                }}</u-button>
            </div>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'u-form',
    props: {
        title: String,
        labelWidth: String,
        contentWidth: String,
        okButton: { type: String, default: '确定' },
        cancelButton: { type: String, default: '取消' }
    },
    provide() {
        return {
            uForm: this
        }
    }
}
</script>

<style lang="scss" scoped>
$margin-l: 32px;
$margin-m: 16px;
$margin-s: 8px;

.u-form {
    width: 100%;
    height: 100%;
    .title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 40px;
    }
    &-row {
        margin-bottom: $margin-m;
        position: relative;
    }

    &-ops {
        margin-top: 30px;
        padding-top: $margin-l;
        text-align: center;

        .u-button {
            margin: 0 10px;
            vertical-align: middle;
        }
    }

    &-label {
        display: inline-block;
        width: 20%;
        text-align: right;
        margin-right: $margin-s;
        vertical-align: top;
        line-height: 36px;
    }

    &-value {
        display: inline-block;
        width: 70%;
        text-align: left;
        min-height: 36px;
    }

    &-tip {
        font-size: 12px;
        color: #888;
    }

    &-error {
        font-size: 12px;
        color: $error-color;
        position: absolute;
        bottom: -20px;
    }
}
</style>
