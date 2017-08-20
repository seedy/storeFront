const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  context: __dirname,
  entry: {
    app: './src/app/app.module.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {loader: 'ng-annotate-loader'},
          {loader: 'babel-loader'}
        ]
      },
      { test: /\.html$/, loader: "html-loader" },
      { test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"}
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader", options: {sourceMap: true}},
          {loader: "sass-loader", options: {sourceMap: true}}
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        include: [path.resolve(__dirname, "media")],
        loader: "file-loader"
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      }
    ]
  },
  resolve: {
    alias: {
      media: 'media',
      json: 'json'
    },
    modules: [
      path.resolve(__dirname),
      'node_modules'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/app/index.html'
    })
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  }
};