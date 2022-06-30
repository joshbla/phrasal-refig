const path = require('path');

const conf = {
    entry: './src/chatBot', 
    output: {
        path: path.resolve(__dirname, './dist'), 
        filename: 'main.js', 
        publicPath: 'dist/'
    }, 
    devServer: {
        overlay:true
    }
};

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}