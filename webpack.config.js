const path = require('path');
const packageJson = require('./package');
const camelCase = require('lodash/camelCase');

const [distDirectory] = packageJson.main.trim().split('/');
const isProduction = process.env.NODE_ENV === 'production';

const platform = process.env.RN_PLATFORM;
global.__PLATFORM__ = platform;

const config = {
    mode: isProduction ? 'production' : 'development',
    entry: path.resolve('src/index.ts'),
    devtool: "source-map",
    output: {
        path: path.resolve(distDirectory),
        filename: `${platform}.js`,
        library: camelCase(packageJson.name),
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            // load typescript files
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            // create extra source maps
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            // solve js/jsx files
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            // solve asset files
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader',
                ],
            }
        ]
    },
    plugins: [],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    // these packages should be supplied by the project that uses this library
    externals: ['react-native', 'react', 'react-dom'],
};

module.exports = config;
