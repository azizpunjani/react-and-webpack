var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: './app.js',

    output: {
        filename: 'bundle.js',
        path: __dirname + '/public/js/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: [ 'babel-loader' ],
                query: {
                    presets: [ 'react', 'es2015' ]
                }
            }
        ]
    }
};
