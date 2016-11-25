let config = {
    entry : './src/js/app.js',
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
    }
};

module.exports = config;