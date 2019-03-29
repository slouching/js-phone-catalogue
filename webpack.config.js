const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './scripts/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'build.js'
    },
    devtool: isProduction ? false : 'source-map',
    watch: true,
    devServer: {
        contentBase: './public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            API_URL: isProduction ? "'https://slouching.github.io/js-phone-catalogue/phones'" : "'http://localhost:3000/phones'"
        }),
        new UglifyJsPlugin({
            sourceMap: !isProduction
        })
    ]
};