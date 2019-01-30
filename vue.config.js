module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/typescript-vue-example/' : '/',
    configureWebpack: {
        devtool: 'source-map'
    },
    devServer: {
        port: 9090
    }
}
