var ExtraWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = function (paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,
                    use: ExtraWebpackPlugin.extract({
                        publicPath: '../',
                        fallback: 'style-loader',
                        use: [
                            'css-loader',
                            'sass-loader'
                        ]
                    })
                },
                {
                    test: /\.css$/,
                    include: paths,
                    use: ExtraWebpackPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            'css-loader'
                        ]
                    })
                }
            ]
        },
        plugins: [
            new ExtraWebpackPlugin('./css/[name].css')
        ]
    }
};