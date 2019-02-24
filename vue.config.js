module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/typescript-vue-example/' : '/',
    configureWebpack: {
        devtool: 'source-map'
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true
                return options
            })
        config.module.rule('eslint').uses.clear()
        config.module.rule('eslint').clear()
    },
    devServer: {
        port: 9090
    }
}
