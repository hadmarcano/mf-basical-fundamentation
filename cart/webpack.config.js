const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/bootstrap'
            },
            shared: ['faker'],
            // shared: {
            //     faker: { /* If having multiples project using diferent versions of "faker" throw a unsatified version warning! */
            //         singleton: true
            //     }
            // }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};