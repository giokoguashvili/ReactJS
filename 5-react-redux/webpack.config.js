let path = require("path");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');


let config = {

    context: path.join(__dirname, "./"),

    entry: ['babel-polyfill', './src/index.js'],

    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
    },

    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0', 'react'],
                plugins: ['react-html-attrs']
            }
        }, {
            test: /\.css$/,
            loader: 'style!css?modules=true'
        }]
    },

    plugins: [
        // new FlowStatusWebpackPlugin({
        //     failOnError: true,
        //     restartFlow: false
        // }),
        new OpenBrowserPlugin({
            url: 'http://localhost:2727/'
        }),
        new HtmlWebpackPlugin({
            title: 'React with Redux',
            template: './src/index.html',
        }),
        // new webpack.HotModuleReplacementPlugin()
    ],

    output: {
        path: './build',
        filename: 'app.bundle.js',
        publicPath: '/'
    },

    devServer: {
        // hot: true,
        port: 2727,
        contentBase: "./src",
        historyApiFallback: true,
        // historyApiFallback: {
        //     index: "/build/"
        // }
        // historyApiFallback: {
        //     rewrites: [{
        //         from: /\/(\d\.)?app\.js(\.map)?/,
        //         to: context => context.match[0]
        //     }]
        // }
    },
};

module.exports = config;