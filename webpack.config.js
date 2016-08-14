/* global __dirname */

const path = require('path');

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dirJS = path.resolve(__dirname, 'src');
const dirHtml = path.resolve(__dirname, 'html');
const dirBuild = path.resolve(__dirname, 'build');

module.exports = {
  entry: path.resolve(dirJS, 'index.js'),
  output: {
    path: dirBuild,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: dirBuild
  },
  module: {
    loaders: [
      {
        loader: 'react-hot',
        test: dirJS
      },
      {
        loader: 'babel-loader',
        test: dirJS,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  plugins: [
    // Simply copies the files over
    new CopyWebpackPlugin([
        { from: dirHtml } // to: output.path
    ]),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};
