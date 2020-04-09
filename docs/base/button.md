# Button

## 基本使用

::: demo
```vue
<template>
  <u-layout dir="v">
    <u-layout>
      <u-button>普通按钮</u-button>
      <u-button type="primary">主要按钮</u-button>
      <u-button type="success">成功按钮</u-button>
      <u-button type="warning">警告按钮</u-button>
      <u-button type="danger">禁用按钮</u-button>
      <u-button type="info">消息按钮</u-button>
    </u-layout>
    <u-layout>
      <u-button round>普通按钮</u-button>
      <u-button type="primary" round>主要按钮</u-button>
      <u-button type="success" round>成功按钮</u-button>
      <u-button type="warning" round>警告按钮</u-button>
      <u-button type="danger" round>禁用按钮</u-button>
      <u-button type="info" round>消息按钮</u-button>
    </u-layout>
    <u-layout>
      <u-button icon="edit" circle />
      <u-button icon="share" type="primary" circle />
      <u-button icon="share" type="success" circle />
      <u-button icon="share" type="warning" circle />
      <u-button icon="delete" type="danger" circle />
      <u-button icon="search" type="info" circle />
    </u-layout>
    <u-layout>
      <u-button type="text">文字按钮</u-button>
      <u-button type="text" disabled>禁用按钮</u-button>
    </u-layout>
  </u-layout>
</template>
```
:::

## icon
::: demo
```vue
<template>
    <div>
      <u-button type="primary" icon="edit"></u-button>
      <u-button type="primary" icon="share"></u-button>
      <u-button type="primary" icon="delete"></u-button>
      <u-button type="primary" icon="search">搜索</u-button>
      <u-button type="primary">上传 <u-icon name="backup" /></u-button>
    </div>
</template>
```
:::

## to/href
::: demo
```vue
<template>
    <div>
        <u-button to="/components/unit/link" type="primary">导航按钮</u-button>
        <u-button href="http://www.baidu.com" type="primary">对外导航按钮</u-button>
    </div>
</template>
```
:::

## size
::: demo
```vue
<template>
  <u-layout dir="v">
    <u-layout>
      <u-button size="l">大按钮</u-button>
      <u-button>普通按钮</u-button>
      <u-button size="s">小按钮</u-button>
      <u-button size="xs">超小按钮</u-button>
    </u-layout>
    <u-layout>
      <u-button size="l" round>大按钮</u-button>
      <u-button round>普通按钮</u-button>
      <u-button size="s" round>小按钮</u-button>
      <u-button size="xs" round>超小按钮</u-button>
    </u-layout>
  </u-layout>
</template>
```
:::

## 按钮组
::: demo
```vue
<template>
  <u-button-group>
    <u-button type="primary" icon="share">上一页</u-button>
    <u-button type="primary" icon="share">下一页</u-button>
  </u-button-group>
</template>
```
:::

## disabled
::: demo
```vue
<template>
  <u-button disabled>禁用按钮</u-button>
</template>
```
:::

## 属性设置

| 参数 | 说明 | 类型| 可选值| 默认值|
| --- | --- | --- | --- | --- |
type | 主题 | String | primary/success/warning/danger/info/text | -
size | 预设输入框尺寸 | String | l/s/xs | -
round | 是否圆角按钮	 | Boolean | - | false
circle | 是否圆形按钮	 | Boolean | - | false
icon | 图标	 | String | - | -
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
