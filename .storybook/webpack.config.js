const path = require('path');

module.exports = {
    module: {
        rules: [
            // load the storysource loader
            {
                test: /\.story\.jsx?$/,
                loader: require.resolve('@storybook/addon-storysource/loader'),
                enforce: 'pre',
                include: [path.resolve('src')],
                exclude: [path.resolve('node_modules')],
                options: {
                    prettierConfig: {
                        printWidth: 120,
                        tabWidth: 2,
                        bracketSpacing: true,
                        trailingComma: 'es5',
                        singleQuote: true,
                    },
                }
            },
            // load typescript files
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: require.resolve('awesome-typescript-loader'),
                    },
                    // generate documentation
                    {
                        loader: require.resolve('react-docgen-typescript-loader'),
                    },
                ],
            },

            // used to load assets
            {
                test: /\.(gif|jpe?g|png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {name: '[name].[ext]'}
                }
            }
        ]
    },
    resolve: {
        extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],
        alias: {
            'react-native': 'react-native-web'
        }
    }
};
