# Switch

## 基本使用

::: demo
```vue
<template>
  <u-switch/>
</template>
```
:::

## 属性设置
> 继承原生input组件参数

| 参数 | 说明 | 类型| 可选值| 默认值|
| --- | --- | --- | --- | --- |
| v-model | 输入值| String/Number| - | - |
| value.sync | 输入值| String/Number| - | - |
| size | 尺寸| String| l/s | - |
| type | 类型| String| input/textarea | - |
disabled | 是否禁用, 禁用后不响应click事件 | Boolean | true/false | false

## 事件
| 事件名| 说明| 回调值|
| -- | -- | -- |
| input| 修改input值时触发| 修改后的值|
