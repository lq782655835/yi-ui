# Tooltip

## 基本用法
```vue
<template>
    <div class="box">
        <div class="top">
            <u-tooltip class="item" content="Top Left 提示文字" placement="top-start">
                <u-button>上左</u-button>
            </u-tooltip>
            <u-tooltip class="item" content="Top Center 提示文字" placement="top">
                <u-button>上边</u-button>
            </u-tooltip>
            <u-tooltip class="item" content="Top Right 提示文字" placement="top-end">
                <u-button>上右</u-button>
            </u-tooltip>
        </div>
        <div class="left">
            <u-tooltip class="item" content="Left Top 提示文字" placement="left-start">
                <u-button>左上</u-button>
            </u-tooltip>
            <u-tooltip class="item" content="Left Center 提示文字" placement="left">
                <u-button>左边</u-button>
            </u-tooltip>
            <u-tooltip class="item" content="Left Bottom 提示文字" placement="left-end">
                <u-button>左下</u-button>
            </u-tooltip>
        </div>

        <div class="right">
            <u-tooltip class="item" content="Right Top 提示文字" placement="right-start">
                <u-button>右上</u-button>
            </u-tooltip>
            <u-tooltip class="item" content="Right Center 提示文字" placement="right">
                <u-button>右边</u-button>
            </u-tooltip>
            <u-tooltip class="item" content="Right Bottom 提示文字" placement="right-end">
                <u-button>右下</u-button>
            </u-tooltip>
        </div>
        <div class="bottom">
            <u-tooltip class="item" content="Bottom Left 提示文字" placement="bottom-start">
                <u-button>下左</u-button>
            </u-tooltip>
            <u-tooltip class="item" content="Bottom Center 提示文字" placement="bottom">
                <u-button>下边</u-button>
            </u-tooltip>
            <u-tooltip class="item" content="Bottom Right 提示文字" placement="bottom-end">
                <u-button>下右</u-button>
            </u-tooltip>
        </div>
    </div>
</template>
<style lang="scss" scoped>
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 100px;
    }

    .right {
      float: right;
      width: 100px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px 4px 4px 10px;
    }
  }
</style>
```

## 更多Content

```vue
<template>
    <u-tooltip placement="top">
        <div slot="content">多行信息<br/>第二行信息</div>
        <u-button>Top center</u-button>
    </u-tooltip>
</template>
```

## hide-delay
```vue
<template>
    <u-tooltip :hover-delay="500" placement="right" content="提示文字">
        <u-button>hover-delay</u-button>
    </u-tooltip>
</template>
```

## Tooltip Atrribute

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
content | 内容 | String |  | -
placement | 显示位置 | String | (top/bottom/left/right)(-start/-end) | bottom-start
hover-delay | 展示延迟时间，单位为毫秒 | Number |  | 0
offset | 出现位置的偏移量 | Number |  | 0
disabled | 是否禁用 | Boolean | - | false
