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
    * [u-link](./src/components/u-link.vue)
    * [u-button](./src/components/u-button.vue)
    * [u-icon](./src/components/u-icon.vue)
    * [u-layout](./src/components/u-layout.vue)
* 表单组件
    * [u-input/textarea](./src/components/u-input.vue)
    * [u-select](./src/components/u-select.vue)
    * [u-switch](./src/components/u-switch.vue)
    * [u-radios/radio](./src/components/u-radio/u-radios.vue)
    * [u-checkboxs/checkbox](./src/components/u-checkbox/u-checkboxs.vue)
    * [u-form/u-form-item](./src/components/u-form/u-form.vue)
* 实用组件
    * [u-table/u-table-column](./src/components/u-table/u-table.vue)
    * [u-pagination](./src/components/u-pagination.vue)
    * [u-tabs/u-tab](./src/components/u-tab/u-tabs.vue)
    * [u-crumb/u-crumb-item](./src/components/u-crumb/u-crumb.vue)
* 弹出框组件
    * [u-modal](./src/components/u-modal.vue)
    * [u-toast](./src/components/u-toast.vue)
    * [u-tooltip/u-popper](./src/components/u-tooltip.vue)

## Preview

![image](https://user-images.githubusercontent.com/6310131/56558066-fbe16880-65cf-11e9-9940-07c7be20834c.png)

## License

The code is distributed under the [MIT](http://opensource.org/licenses/MIT) license