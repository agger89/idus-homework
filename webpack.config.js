'use strict'
const path = require('path');

module.exports = {
    entry: {
        main: ['./src/main.js', './src/styles.scss']
    },
    output : {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, './src'),
                loaders: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 5000
                    }
                  }
                ]
            }
        ]
    },
    plugins: [],
    devServer: {
        contentBase: './public',
        host: 'localhost',
        port: 8080
    }
}