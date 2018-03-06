const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../src/www.ts'),
  target: "node",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'dev.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'source-map',
  target: 'node',
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};