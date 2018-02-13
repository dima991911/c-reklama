module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /.(svg|woff|woff2|eot|ttf|otf)(\?.*$|$)/,
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