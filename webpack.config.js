const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkerPlugin = require('worker-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'demo_1': './src/demo_1/demo_1.js',
    'demo_2': './src/demo_2/demo_2.js',
    'demo_2_worker': './src/demo_2/demo_2_worker.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      }],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['demo_1'],
      filename: 'demo_1.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/demo_2/template_2.html',
      chunks: ['demo_2', 'demo_2_worker'],
      filename: 'demo_2.html'
    }),
    new WorkerPlugin(),
  ]
};