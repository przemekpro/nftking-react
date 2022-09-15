const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',

    output:  {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                  loader: 'url-loader',
                },
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                  loader: 'url-loader',
                },
            },
        ],
    },

    devServer: {
        historyApiFallback: true,
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
    ],
}