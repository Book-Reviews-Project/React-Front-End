require('dotenv').config()
require('@babel/polyfill');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", __dirname + "/src/index.js"],
  output: {
      path: __dirname + '/static',
      filename: "[name].[chunkhash:8].js"
  },
  devtool: "source-map",
  module: {
      rules: [
          {
              enforce: "pre",
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: "eslint-loader"
          },
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader",
                  options: {
                      presets: [
                          "env",
                          "react",
                          "stage-1"
                      ]
                  }
              }
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      // favicon: 'public/favicon.ico'
    })
  ],
  devServer: {
    port: port,
    contentBase: path.join(__dirname, 'public'),
    open: true
  }
};