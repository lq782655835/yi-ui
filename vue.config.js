const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: process.env.site ? '/yi-ui' : '/',
    outputDir: process.env.site ? 'site' : 'dist',
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@packages/assets/css/vars.scss";`
            }
        }
    },
    chainWebpack: config => {
        // set alias
        config.resolve.alias.set('@packages', resolve('packages'))

        // markdown Loader
        config.module
            .rule('md')
            .test(/\.md$/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('@vusion/md-vue-loader')
            .loader('@vusion/md-vue-loader')
            .end()
    }
}
