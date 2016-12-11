let path = require("path");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
var webpack = require('webpack');


let config = {

    context: path.join(__dirname, "./"),

    // entry : [
    //     'webpack-dev-server/client?http://localhost:2727',
    //     'webpack/hot/dev-server',
    //     './src/main.js'
    // ],

    entry : {
        main: './src/main.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
    },

    module: {
        loaders: [
            { 
                test:  /\.(js|jsx)$/,
                exclude: /node_modules/, 
                loader: 'react-hot'
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, 
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['react-html-attrs']
                }   
            }, { 
                test: /\.css$/,
                loader: 'style!css?modules=true'
            }
        ]
    },

    plugins: [
        // new FlowStatusWebpackPlugin({
        //     failOnError: true,
        //     restartFlow: false
        // }),
        new OpenBrowserPlugin({ 
            url: 'http://localhost:2727' 
        }),
        new HtmlWebpackPlugin({
            title: 'React with Flux',
            template: './src/index.html', 
        }),
        // new webpack.HotModuleReplacementPlugin()
    ],

    output: { 
        path: './build',
        filename: 'app.bundle.js'
    },

    devServer: {
        // hot: true,
        port: 2727,
        contentBase: "./build", 
        historyApiFallback: true 
    },
};

module.exports = config;