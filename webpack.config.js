module.exports = {
    entry: './src/main.css',
    output: {
        filename: './target/main.css',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ]
            }
        ]
    }
}
