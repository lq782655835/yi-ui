# 快速开始

轻量级组件库

[![NPM Version][npm-img]][npm-url]
[![Dependencies][david-img]][david-url]
[![NPM Download][download-img]][download-url]

[npm-img]: http://img.shields.io/npm/v/yi-ui.svg?style=flat-square
[npm-url]: http://npmjs.org/package/yi-ui
[david-img]: https://img.shields.io/github/repo-size/lq782655835/yi-ui.svg
[david-url]: https://npmjs.org/package/yi-ui
[download-img]: https://img.shields.io/npm/dm/yi-ui.svg?style=flat-square
[download-url]: https://npmjs.org/package/yi-ui

## 安装与引入

组件库的安装与引入有两种种方式。推荐使用 npm 的安装方式，可以和 Webpack 以及其他 npm 生态很好地结合使用。

### 1. NPM

### 安装

```
npm install yi-ui
```

### 使用

``` js
import YIUI from 'yi-ui'
import 'yi-ui/dist/YIUI.css'
Vue.use(YIUI)
```

``` html
<u-link>click me</u-link>
<u-button type="primary">click me</u-button>
```

### 2. CDN

目前可以通过 [unpkg.com/yi-ui](https://unpkg.com/browse/yi-ui/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

``` html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/browse/yi-ui/dist/YIUI.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/browse/yi-ui/dist/YIUI.umd.min.js"></script>
```

## 组件列表列表

* 基础组件
    * [u-link](../packages/u-link.vue)
    * [u-button](../packages/u-button.vue)
    * [u-icon](../packages/u-icon.vue)
    * [u-layout](../packages/u-layout.vue)
* 表单组件
    * [u-input/textarea](../packages/u-input.vue)
    * [u-select](../packages/u-select.vue)
    * [u-switch](../packages/u-switch.vue)
    * [u-radios/radio](../packages/u-radio/u-radios.vue)
    * [u-checkboxs/checkbox](../packages/u-checkbox/u-checkboxs.vue)
    * [u-form/u-form-item](../packages/u-form/u-form.vue)
* 实用组件
    * [u-table/u-table-column](../packages/u-table/u-table.vue)
    * [u-pagination](../packages/u-pagination.vue)
    * [u-tabs/u-tab](../packages/u-tab/u-tabs.vue)
    * [u-crumb/u-crumb-item](../packages/u-crumb/u-crumb.vue)
* 弹出框组件
    * [u-modal](../packages/u-modal.vue)
    * [u-toast](../packages/u-toast.vue)
    * [u-tooltip/u-popper](../packages/u-tooltip.vue)

## 预览

![image](https://user-images.githubusercontent.com/6310131/56558066-fbe16880-65cf-11e9-9940-07c7be20834c.png)
