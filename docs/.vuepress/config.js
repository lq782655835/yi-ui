module.exports = {
    title: '文档中心',
    description: 'component lib',
    head: [
        ['script', { src: 'https://unpkg.com/vue/dist/vue.js' }]
        // ['script', { src: 'https://raw.githubusercontent.com/lq782655835/yi-ui/master/dist/YIUI.umd.js' }],
        // ['link', {
        //     type: 'text/css',
        //     rel: 'stylesheet',
        //     href: 'https://raw.githubusercontent.com/lq782655835/yi-ui/master/dist/YIUI.css' }],
    ],
    base: '/yi-ui/',
    themeConfig: {
        sidebar: 'auto'
    },
    plugins: [
        [
            'demo-block',
            {
                settings: {
                    codepen: true
                }
            }
        ],
        require('./plugin-yi-ui')
    ]
}
