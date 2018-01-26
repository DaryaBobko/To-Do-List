var path = require("path");

module.exports = {
    entry: {
        app: "./index.js"
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "dist"
    },

    devtool: "source-map",

    module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { 
              test: /\.css/,
              use: [
                    'style-loader',
                    'css-loader'
                    ]
            }
        ]
      }

    // watch: true,
}