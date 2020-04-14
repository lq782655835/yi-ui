# Input

## 基本使用

::: demo
```vue
<template>
  <u-input v-model="inputValue" @input="changedInput"/>
</template>

<script>
export default {
  data() {
    return {
      inputValue: 'helloworld'
    }
  },
  methods: {
      changedInput(val) {
          console.log(val)
      }
  }
}
</script>
```
:::

## 原生属性

原生minlength/maxlength/placeholder
::: demo
```vue
<template>
  <u-input minlength="1" maxlength="10" placeholder="原生长度限制" />
</template>
```
:::

## size
::: demo
```vue
<template>
  <u-layout dir="v">
    <u-input size="l" placeholder="大"/>
    <u-input placeholder="中"/>
    <u-input size="s" placeholder="小"/>
  </u-layout>
</template>
```
:::

## disabled

::: demo
```vue
<template>
  <u-input disabled placeholder="禁用"/>
</template>
```
:::

## textarea

::: demo
```vue
<template>
  <u-input type="textarea"/>
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
