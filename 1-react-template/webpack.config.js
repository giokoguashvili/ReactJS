let path = require("path");

let config = {
    context: path.join(__dirname, "./"),
    entry : {
        main: './src/js/app.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/, 
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }   
            }
        ]
    },
    output: { 
        path: './src',
        filename: 'app.bundle.js'
    },
    devServer:
    {
        inline: true,
        port: 2727,
    },
    // devtool: "eval"
};

module.exports = config;