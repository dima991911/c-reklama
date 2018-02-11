module.exports = function (paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader'
                    }
                }
            ]
        }
    }
};