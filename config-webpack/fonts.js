module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|eot|ttf)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: 'fonts/[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        }
    }
};