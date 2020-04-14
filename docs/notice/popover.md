# Popover

## 基本用法
:::demo
```vue
<template>
    <u-layout>
        <u-popover  content="使用 content 属性添加内容">
            <u-button>内容</u-button>
        </u-popover>
        <u-popover title="标题" content="使用 title 属性添加标题">
            <u-button>带标题</u-button>
        </u-popover>
        <u-popover>
            <u-button>自定义内容</u-button>
            <span slot="title">
                <u-icon name="backup" /> 标题
            </span>
            <span slot="content">使用 <u-link>slot</u-link> 可以添加一些复杂功能</span>
        </u-popover>
    </u-layout>
</template>
```
:::

## trigger

:::demo
```vue
<template>
    <u-layout>
        <u-popover trigger="hover" content="使用 content 属性添加内容">
            <u-button>hover</u-button>
        </u-popover>
        <u-popover trigger="click" content="使用 content 属性添加内容">
            <u-button>click</u-button>
        </u-popover>
        <u-popover trigger="right-click" content="使用 content 属性添加内容">
            <u-button>right-click</u-button>
        </u-popover>
        <u-popover trigger="double-click" content="使用 content 属性添加内容">
            <u-button>double-click</u-button>
        </u-popover>
        <u-popover trigger="manual" :open="manualToggle" content="使用 content 属性添加内容">
            <u-button @click="manualToggle=!manualToggle">manual</u-button>
        </u-popover>
    </u-layout>
</template>

<script>
export default {
    data() {
        return { manualToggle: false } /* 手动模式 */
    }
}
</script>
```
:::

## placement

:::demo
```vue
<template>
    <u-layout>
        <u-popover placement="top" content="使用 content 属性添加内容">
            <u-button>top</u-button>
        </u-popover>
        <u-popover placement="bottom" content="使用 content 属性添加内容">
            <u-button>bottom</u-button>
        </u-popover>
        <u-popover placement="left" content="使用 content 属性添加内容">
            <u-button>left</u-button>
        </u-popover>
        <u-popover placement="right" content="使用 content 属性添加内容">
            <u-button>right</u-button>
        </u-popover>
    </u-layout>
</template>
```
:::

## Popover Atrribute

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
title | 标题 | String |  | -
content | 内容 | String |  | -
trigger | 触发方式 | String | hover/click/right-click/double-click/manual | click
placement | 显示位置 | String | (top/bottom/left/right)(-start/-end) | bottom-start
disabled | 是否禁用 | Boolean |  | false
