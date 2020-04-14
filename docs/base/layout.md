# Layout

## 基本用法
:::demo
```vue
<template>
    <u-layout>
        <u-button>默认横向排列</u-button>
        <u-button>默认横向排列</u-button>
        <u-button>默认横向排列</u-button>
    </u-layout>
</template>
```
:::

## dir
排列方向
:::demo
```vue
<template>
    <u-layout dir="v" display="block">
        <u-button>竖向排列</u-button>
        <u-button>竖向排列</u-button>
        <u-button>竖向排列</u-button>
    </u-layout>
</template>
```
:::

## gap
间距

:::demo
```vue
<template>
    <u-layout gap="s">
        <u-button>默认横向排列</u-button>
        <u-button>默认横向排列</u-button>
        <u-button>默认横向排列</u-button>
    </u-layout>
</template>
```
:::

## flex布局
:::demo
```vue
<template>
  <div>
    <u-layout flex="main:center">
        <span>flex横向排列</span> <span>flex横向排列</span> <span>flex横向排列</span>
    </u-layout>
    <u-layout flex="cross:center" dir="v">
        <span>flex纵向排列</span> <span>flex纵向排列</span> <span>flex纵向排列</span>
    </u-layout>
  </div>
</template>
```
:::

## 使用参数

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
dir | 主题 | String | primary/success/warning/danger/info | -
gap | 图标 | String | - | -
display | 跳转的链接地址 | String | - | -
flex | 配合vue-router, 与router-link的to属性相同 | String/Location | - | -
