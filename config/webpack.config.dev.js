'use strict'

const webpack = require('webpack')

module.exports = {
  devtool: 'inline-eval-cheap-source-map',
  externals: ['cozy'],
  module: {
    loaders: [{
      test: require.resolve('cozy-bar/dist/cozy-bar.js'),
      loader: 'imports?css=./cozy-bar.css'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: JSON.stringify('http://app.cozy.local:8080'),
      __STACK_ASSETS__: false,
      __DEV__: true
    }),
    new webpack.ProvidePlugin({
      'cozy.client': 'cozy-client-js/dist/cozy-client.js',
      'cozy.bar': 'cozy-bar/dist/cozy-bar.js'
    })
  ]
}
