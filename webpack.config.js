/* jshint node: true */
var path = require('path');


module.exports = {
    context: path.join(__dirname),
    entry: './src/index.js',

    output: {
        path: path.join(__dirname),
        filename: 'react-7segments.js',
        libraryTarget: 'umd',
        library: 'React7Seg'
    },

    externals: {
        'react': 'var React',
        'react/addons': 'var React',
        'react-dom': 'var ReactDOM'
    },
    
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    
    module: {
        loaders: [
            {
                test: /\.scss$/,
                // Query parameters are passed to node-sass
                loader: 'style!css!sass?outputStyle=expanded&'
            },
            {
                test: /(\.js)|(\.jsx)$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './bower_components'),
            path.resolve(__dirname, './node_modules')
        ]
    }
};
