# 工具

文档项目用到以下开源工具：

## 1. [vuepress-plugin-demo-block](https://github.com/lq782655835/vuepress-plugin-demo-block)

组件demo在线展示（既可看运行效果，也可以看源码）

:::warning
需要添加Vue依赖：['script', { src: 'https://unpkg.com/vue/dist/vue.js' }],
:::

## 2. [vuepress-theme-antdocs](https://github.com/zpfz/vuepress-theme-antdocs)

vuepress antd皮肤, 文档：https://antdocs.seeyoz.cn/guide/extend-config.html

更多开源皮肤：https://github.com/vuepressjs/awesome-vuepress

## 3. script工具

* husky + lint-staged
* gh-pages（发布demo到github）
* release-it（自动提交github代码 + 自动修改lib库版本 + 推送npm服务器）

:::warning
release-it可通过package.json中配置属性，特别是设置git.requireCleanWorkingDir：false
:::

## 注意点

### webpack打包

vuepress的webpack环境与组件库webpack环境不一致，所以组件库有任何webpack定制，都需要在.vuepress/config中再配置一遍webpack。

比如组件库依赖了scss-loader，在vuepress也需要添加该配置。