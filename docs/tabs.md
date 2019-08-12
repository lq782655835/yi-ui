# Tabs

## 基本用法
```vue
<template>
    <u-tabs v-model="tabValue">
        <u-tab title="tab1">测试1tab内容</u-tab>
        <u-tab title="tab2">测试2tab内容</u-tab>
        <u-tab title="tab3">测试3tab内容</u-tab>
    </u-tabs>
</template>

<script>
export default {
    data() {
        return { tabValue: 1 }
    }
}
</script>
```

## to
``` vue
<template>
    <u-tabs :value="2">
        <u-tab title="去往首页" to="/"></u-tab>
        <u-tab title="去往Demo" to="/demo"></u-tab>
        <u-tab title="去往Tab" to="/tabs"></u-tab>
    </u-tabs>
</template>
```

## title
```vue
<template>
    <u-tabs>
        <u-tab title="tab1">
            <span slot="title">
                <u-icon name="edit" /> 自定义title
            </span>
            测试1tab内容
        </u-tab>
        <u-tab title="tab2">
            <span slot="title">
                <u-icon name="backup" /> 自定义title
            </span>
            测试1tab内容
        </u-tab>
    </u-tabs>
</template>
```

## closable
```vue
<template>
    <u-tabs :closable="true">
        <u-tab title="tab1">测试1tab内容</u-tab>
        <u-tab title="tab2">测试2tab内容</u-tab>
        <u-tab title="tab3">测试3tab内容</u-tab>
    </u-tabs>
</template>
```

## disabled

## Tabs Atrribute

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
value/v-model |  |  |  | -
closable | 是否可关闭, 禁用后不响应click事件 | Boolean | true/false | false
disabled | 是否禁用, 禁用后不响应click事件 | Boolean | true/false | false

## Tabs Events

| 事件名| 说明| 回调值|
| -- | -- | -- |
| @before-close |  关闭tab前事件 | event |

## Tab Attribute

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
title | 选项卡标题 |  |  | -