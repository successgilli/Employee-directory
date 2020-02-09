/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
const dotEnv = require('dotenv');
const webpack = require('webpack');
const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');


dotEnv.config();

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve(__dirname, '../client/public'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  plugins: [
    new htmlwebpackplugin({
      template: './client/src/index.html',
    }),
    // new FaviconsWebpackPlugin(path.resolve(__dirname, '../src/assets/images/viisaus.jpeg')),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
};
