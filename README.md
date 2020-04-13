# yi-ui

a lightweight ui component for vue2.x

[![NPM Version][npm-img]][npm-url]
[![Dependencies][david-img]][david-url]
[![NPM Download][download-img]][download-url]

[npm-img]: http://img.shields.io/npm/v/yi-ui.svg?style=flat-square
[npm-url]: http://npmjs.org/package/yi-ui
[david-img]: https://img.shields.io/github/repo-size/lq782655835/yi-ui.svg
[david-url]: https://npmjs.org/package/yi-ui
[download-img]: https://img.shields.io/npm/dm/yi-ui.svg?style=flat-square
[download-url]: https://npmjs.org/package/yi-ui

## Setup
```
npm install yi-ui
```

## Usage

``` js
import YIUI from 'yi-ui'
import 'yi-ui/dist/YIUI.css'
Vue.use(YIUI)
```

``` html
<u-link>click me</u-link>
<u-button type="primary">click me</u-button>
```

## Components

* 基础组件
    * [u-link](./packages/u-link.vue)
    * [u-button](./packages/u-button.vue)
    * [u-icon](./packages/u-icon.vue)
    * [u-layout](./packages/u-layout.vue)
* 表单组件
    * [u-input/textarea](./packages/u-input.vue)
    * [u-select](./packages/u-select.vue)
    * [u-switch](./packages/u-switch.vue)
    * [u-radios/radio](./packages/u-radio/u-radios.vue)
    * [u-checkboxs/checkbox](./packages/u-checkbox/u-checkboxs.vue)
    * [u-form/u-form-item](./packages/u-form/u-form.vue)
* 实用组件
    * [u-table/u-table-column](./packages/u-table/u-table.vue)
    * [u-pagination](./packages/u-pagination.vue)
    * [u-tabs/u-tab](./packages/u-tab/u-tabs.vue)
    * [u-crumb/u-crumb-item](./packages/u-crumb/u-crumb.vue)
* 弹出框组件
    * [u-modal](./packages/u-modal.vue)
    * [u-toast](./packages/u-toast.vue)
    * [u-tooltip/u-popper](./packages/u-tooltip.vue)

## 本地开发组件库

``` sh
npm install
npm run dev
```

### 1. git commit msg 规范

``` sh
git commit -m 'feat: add feature'
```
* feat: 表示新增了一个功能
* fix: 表示修复了一个 bug
* docs: 表示只修改了文档
* style: 表示修改格式、书写错误、空格等不影响代码逻辑的操作
* refactor: 表示修改的代码不是新增功能也不是修改 bug，比如代码重构
* perf: 表示修改了提升性能的代码
* test: 表示修改了测试代码
* build: 表示修改了编译配置文件
* chore: 无 src 或 test 的操作
* revert: 回滚操作

### 2. 使用npm run commit提交

``` sh
npm run commit
```

### 3. 书写docs文档

在docs下直接书写markdown文档即可，并在docs/.vuepress/config.js下配置目录。详见[vuepress配置](https://vuepress.vuejs.org/zh/config/)。

发布到github可执行命令：
``` sh
npm run release:docs
```

## 组件库打包及发布

``` sh
npm publish
```

## Preview

![image](https://user-images.githubusercontent.com/6310131/56558066-fbe16880-65cf-11e9-9940-07c7be20834c.png)

## License

The code is distributed under the [MIT](http://opensource.org/licenses/MIT) license