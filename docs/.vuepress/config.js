module.exports = {
    title: '文档中心',
    description: 'component lib',
    head: [['script', { src: 'https://unpkg.com/vue/dist/vue.js' }]],
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
