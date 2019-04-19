module.exports = {
    baseUrl: process.env.site ? '/yi-ui' : '/',
    outputDir: process.env.site ? 'site' : 'dist',
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/css/vars.scss";`
            }
        }
    }
}
