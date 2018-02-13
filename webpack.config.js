var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugins = require('html-webpack-plugin');
var html = require('./config-webpack/html');
var sass = require('./config-webpack/sass');
var image = require('./config-webpack/image');
var extract = require('./config-webpack/extract');
var uglifyJs = require('./config-webpack/js.uglify');
var fonts = require('./config-webpack/fonts');

var common = merge([
    {
        devtool: 'inline-source-map',
        entry: {
            'index': './src/js/app.js',
            'blog': './src/js/blog.js'
        },
        output: {
            filename: 'js/[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new HtmlWebpackPlugins({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: 'src/index.html'
            }),
            new HtmlWebpackPlugins({
                filename: 'blog.html',
                chunks: ['blog', 'common'],
                template: 'src/blog.html'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common',
                filename: "js/commons.js"
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            })
        ]
    },
    image(),
    html(),
    fonts()
]);

var developmentServer = {
    devServer: {
        stats: 'errors-only',
        port: 8888
    }
};

module.exports = function (env) {
    if(env == 'production') {
        return merge([
            common,
            extract()
        ]);
    }
    if(env == 'development') {
        return merge([
            common,
            sass(),
            developmentServer
        ]);
    }
};