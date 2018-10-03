
// core files need to provide, the input (entry) and the output


// module.exports is a node command, enabling you to expose something (in this case, an object) to another file

const path = require('path');

module.exports = {
    // mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

// A loader lets you to customise the behaviour of webpack when it loads a given file i.e. every time see a js file do this (also have loaders i.e. for scss converted down to css etc)

// loader = single loader (i.e. as per Babel)
// Use - when need to run an array of loaders i.e. for the css // files in this project