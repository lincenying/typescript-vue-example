module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/typescript-vue-example/' : '/',
    configureWebpack: {
        devtool: 'source-map'
    }
}
