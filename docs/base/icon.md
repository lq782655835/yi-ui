# Icon

## 基本使用
基于material-design-icons,[更多图标](https://material.io/icons/)

:::demo
```vue
<template>
  <div>
    <u-icon name="backup" />
    <u-icon name="info" />
    <u-icon name="face" />
  </div>
</template>
:::

## size/color

:::demo
```vue
<template>
    <div>
        <u-icon size="s" name="edit" />
        <u-icon name="edit" />
        <u-icon size="l" name="edit" />
        <u-icon size="40px" name="edit" />
        <u-icon size="40px" color="#F30000" name="edit" />
    </div>
</template>
```
:::

## to/href

:::demo
```vue
<template>
    <div>
        <u-icon to="/components/unit/link" name="edit">导航</u-icon>
        <u-icon href="http://www.baidu.com" name="backup">对外导航</u-icon>
    </div>
</template>
```
:::

## disabled

:::demo
```vue
<template>
  <u-icon name="backup" disabled />
</template>
```
:::

## 属性设置
| 参数 | 说明 | 类型| 可选值| 默认值|
| --- | --- | --- | --- | --- |
name | 图标名 | String | - | -
size | 图标大小 | String | px/vw/rem | -
color | 图标颜色 | String | - | -
href | 跳转的链接地址 | String | - | -
to | 配合vue-router, 与router-link的to属性相同 | String/Location | - | -
target | 链接打开的方式(原声属性) | String | _blank/_self/_parent/_top | _self
append | 配合vue-router, 为true时, 在当前路径前追加to的路径 | Boolean | true/false | false
replace | 配合vue-router, 为true时, 点击调用router.replace(), 不会在导航留下记录 | Boolean | true/false | false
disabled | 是否禁用, 禁用后不响应click事件 | Boolean | true/false | false

## 事件

| 事件名| 说明| 回调值|
| -- | -- | -- |
| @click |  点击按钮时触发 | event |
| @before-navigate |  使用router相关属性切换路由前触发 | event: {to, replace, preventDefault} |
| @navigate |  使用router相关属性切换路由后触发 | event: {to, replace, exact} |
