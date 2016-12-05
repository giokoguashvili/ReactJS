let path = require("path");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

let config = {
    context: path.join(__dirname, "./"),
    entry : {
        main: './src/js/app.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/, 
                loader: "babel-loader",
                passPerPreset: true,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: [
                         ["typecheck", {
                                "disable": {
                                    "production": true
                                }
                            }
                        ]
                    ]
                }   
            }
        ]
    },
    plugins: [new OpenBrowserPlugin({ url: 'http://localhost:2727' })],
    output: { 
        path: './src',
        filename: 'app.bundle.js'
    },
    devServer:
    {
        inline: true,
        port: 2727,
    },
};

module.exports = config;