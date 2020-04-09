const path = require('path')

module.exports = {
    title: '组件库文档中心',
    description: '轻量级组件库',
    markdown: {
        lineNumbers: true,
    },
    base: '/yi-ui/',
    theme: 'antdocs',
    themeConfig: {
        repo: 'https://github.com/lq782655835/yi-ui',
        docsRepo: 'https://github.com/lq782655835/yi-ui',
        docsDir: 'docs',
        docsBranch: 'master',
        nav: [
            { text: '首页', link: '/' },
            { text: '个人博客', link: '/team-standard/0.standard-ai-summary' },
            {
                text: '工具',
                items: [
                    { text: 'yiai-cli脚手架', link: 'https://github.com/lq782655835/yiai-cli' },
                    { text: 'yi-ui组件库', link: 'https://github.com/lq782655835/yi-ui' },
                    {
                        text: '自动生成blog目录工具',
                        link: 'https://github.com/lq782655835/node-vuepress-auto-read'
                    },
                    {
                        text: 'url自动生成TypeScript代码',
                        link: 'https://github.com/lq782655835/json2ts'
                    },
                    {
                        text: 'svg转icon webpack插件',
                        link: 'https://github.com/lq782655835/svg-icon-webpack-plugin'
                    },
                    { text: '缓存管理工具', link: 'https://github.com/lq782655835/cache-manage-js' }
                ]
            },
            {
                text: '工程模板',
                items: [
                    { text: 'vue', link: 'https://github.com/lq782655835/standard-vue-project' },
                    {
                        text: 'typescript',
                        link: 'https://github.com/lq782655835/standard-vue-typescript-project'
                    },
                    {
                        text: 'official-website',
                        link: 'https://github.com/lq782655835/official-website-template'
                    },
                    {
                        text: 'electron',
                        link: 'https://github.com/lq782655835/electron-vue-template'
                    },
                    { text: 'mpvue', link: 'https://github.com/lq782655835/mpvue-project' },
                    { text: 'tool', link: 'https://github.com/lq782655835/json2ts' }
                ]
            }
        ],
        sidebar: [
            {
                title: '指导',
                collapsable: false,
                children: [
                    'quickstart.md',
                ],
            },
            {
                title: '基础组件',
                collapsable: false,
                children: [
                    'base/link.md',
                    'base/button.md',
                    'base/icon.md',
                    'base/input.md',
                    'base/tabs.md',
                    'base/steps.md',
                ],
            },
            {
                title: '其他组件',
                collapsable: false,
                children: [
                    'other/divider.md',
                    'other/transition.md',
                    'other/backtop.md',
                    'other/tooltip.md',
                    'other/popover.md',
                ]
            }
        ],
        backToTop: true,
        ads:{
            style: 2, 
            speed: 2000,
            items:[
                {
                text: 'Ads details here',
                image:'https://cn.bing.com/th?id=OHR.LoughriggTarn_ZH-CN1404327665_1920x1080.jpg',
                link: 'https://vuepress.vuejs.org/'
                },
                {
                text: 'Ads details here',
                image:'https://cn.bing.com/th?id=OHR.MetamorphicRocks_ZH-CN9753251368_1920x1080.jpg',
                link: 'https://vuepress.vuejs.org/'
                },
                {
                text: 'Ads details here',
                image:'https://cn.bing.com/th?id=OHR.KeichitsuCrocuse_ZH-CN1061292366_1920x1080.jpg',
                link: 'https://vuepress.vuejs.org/'
                }
            ]
        },
    },
    plugins: [
        [
            'leo-demo-block',
            {
                settings: {
                    codepen: true
                }
            }
        ],
        require('./plugin-yi-ui')
    ],
    chainWebpack: (config, isServer) => {
        function addStyleResource(rule) {
            rule
              .use("style-resource")
              .loader("style-resources-loader")
              .options({
                patterns: [
                  path.resolve(__dirname, "../../packages/assets/css/vars.scss"),
                ]
              });
          }
        const types = ["vue-modules", "vue", "normal-modules", "normal"];
        types.forEach(type =>
            addStyleResource(config.module.rule("scss").oneOf(type))
        );
    }
}
