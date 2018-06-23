// @ts-nocheck
const path = require('path')

const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const projectDir = path.resolve(__dirname)
const appDir = path.join(projectDir, 'app')
const mainAppEntryPoint = path.join(appDir, 'appMain.lsc')
const frontEndJsPath = path.join(appDir, 'components', 'settingsWindow', 'frontEnd', 'js')
const settingsWindowMainEntryPoint = path.join(frontEndJsPath, 'settingsWindowWeb.lsc')
const isDev = process.env.NODE_ENV !== 'production'
const debugging = isDev && process.env.nodeDebug === 'true'

console.log('process.env.nodeDebug: ', process.env.nodeDebug)
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

const commonWebpackOptions = {
  mode: process.env.NODE_ENV,
  devtool: debugging ? 'eval-source-map' : 'none',
  context: projectDir,
  module: {
    rules: [
      {
        test: /.lsc/,
        exclude: [
          /(node_modules)/
        ],
        loader: 'babel-loader',
        options: {
          sourceMap: debugging
        }
      },
    ]
  },
  resolve: {
    extensions: ['.lsc', '.js']
  },
  plugins: [
    // Gonna still use DefinePlugin as its a bit shorter than using global.ISDEV.
    new webpack.DefinePlugin({
      ISDEV: process.env.NODE_ENV !== 'production'
    })
  ]
}
/*****
* We dont want webpack to include polyfills or mocks for various node stuff, which we set with
* the 'node' key https://webpack.js.org/configuration/node/
* We also dont want webpack to transpile the stuff in node_modules folder, so we use the
* webpack-node-externals plugin.
*/
const mainWebpackOptions = {
  ...commonWebpackOptions,
  ...{
    target: 'node',
    entry: mainAppEntryPoint,
    output: {
      filename: 'appMain-compiled.js',
      path: appDir
    },
    externals: [nodeExternals()],
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false,
      setImmediate: false
    }
  }
}

const frontEndWebpackOptions = {
  ...commonWebpackOptions,
  ...{
    target: 'web',
    entry: settingsWindowMainEntryPoint,
    output: {
      filename: 'settingsWindowWeb-compiled.js',
      path: frontEndJsPath
    }
  }
}

module.exports = [
  mainWebpackOptions,
  frontEndWebpackOptions,
]
