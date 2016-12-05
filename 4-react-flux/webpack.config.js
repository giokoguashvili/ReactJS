let path = require("path");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


let config = {

    context: path.join(__dirname, "./"),

    entry : {
        main: './src/main.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, 
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }   
            }
        ]
    },

    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:2727' }),
        new HtmlWebpackPlugin({
            title: 'React with Flux',
            template: './src/index.ejs', 
        })
    ],

    output: { 
        path: './build',
        filename: 'app.bundle.js'
    },

    devServer:
    {
        inline: true,
        port: 2727,
    },
};

module.exports = config;