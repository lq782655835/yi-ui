# Link

## 基本用法
```vue
<template>
    <u-tabs>
        <u-tab title="普通tab1">测试1tab内容</u-tab>
        <u-tab title="普通tab2">测试2tab内容</u-tab>
        <u-tab title="普通tab3">测试3tab内容</u-tab>
    </u-tabs>
</template>
```

## to

## disabled

## 使用参数

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
type | 主题 | String | primary/success/warning/danger/info | -
icon | 图标 | String | - | -
href | 跳转的链接地址 | String | - | -
to | 配合vue-router, 与router-link的to属性相同 | String/Location | - | -
target | 链接打开的方式(原声属性) | String | _blank/_self/_parent/_top | _self
append | 配合vue-router, 为true时, 在当前路径前追加to的路径 | Boolean | true/false | false
replace | 配合vue-router, 为true时, 点击调用router.replace(), 不会在导航留下记录 | Boolean | true/false | false
disabled | 是否禁用, 禁用后不响应click事件 | Boolean | true/false | false

## Events

| 事件名| 说明| 回调值|
| -- | -- | -- |
| @click |  点击按钮时触发 | event |
| @before-navigate |  使用router相关属性切换路由前触发 | event: {to, replace, preventDefault} |
| @navigate |  使用router相关属性切换路由后触发 | event: {to, replace, exact} |
