import path from 'path'
import OpenBrowserPlugin from 'open-browser-webpack-plugin' 

export default {
    entry: path.join(__dirname, '/client/index.js'),
    output: {
        path: path.resolve(__dirname, '/'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'client')],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    devtool: 'eval-source-map',
}