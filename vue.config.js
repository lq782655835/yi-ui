module.exports = {
    publicPath: process.env.site ? '/yi-ui' : '/',
    outputDir: process.env.site ? 'site' : 'dist',
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/css/vars.scss";`
            }
        }
    },
    chainWebpack: config => {
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
