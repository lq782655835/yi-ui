# Step

## 基本用法
```vue
<template>
    <u-steps v-model="stepValue">
        <u-step title="步骤1">
            <u-button @click="next">下一步</u-button>
        </u-step>
        <u-step title="步骤2">
            <u-button @click="next">下一步</u-button>
        </u-step>
        <u-step title="步骤3">
            <u-button @click="next">完成</u-button>
        </u-step>
    </u-steps>
</template>

<script>
export default {
    data() {
        return { stepValue: 0 }
    },
    methods: {
        next() {
            if(++this.stepValue > 2) {
                this.stepValue = 0
            }
        }
    }
}
</script>
```

## Steps Atrribute

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
value/v-model |  |  |  | -

## Step Attribute

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
title | 标题 |  |  | -