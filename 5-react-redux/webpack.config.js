let path = require("path");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');


let config = {

    context: path.join(__dirname, "./"),
    
    entry : {
        main: './src/main.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, 
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2', 'react'],
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
        filename: 'app.bundle.js'
    },

    devServer: {
        // hot: true,
        port: 2727,
        contentBase: "./src", 
        historyApiFallback: true 
    },
};

module.exports = config;