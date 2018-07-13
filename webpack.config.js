// @ts-nocheck
const path = require('path')

const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const StringReplacePlugin = require("string-replace-webpack-plugin")

const projectDir = path.resolve(__dirname)
const appDir = path.join(projectDir, 'app')
const mainAppEntryPoint = path.join(appDir, 'appMain.lsc')
const frontEndJsPath = path.join(appDir, 'components', 'settingsWindow', 'frontEnd', 'js')
const settingsWindowMainEntryPoint = path.join(frontEndJsPath, 'settingsWindowWeb.lsc')
const ISDEV = process.env.NODE_ENV !== 'production'

console.log('ISDEV: ', ISDEV)
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

/*****
* We dont want webpack to include polyfills or mocks for various node stuff, which we set with
* the 'node' key https://webpack.js.org/configuration/node/
*
* We also dont want webpack to transpile the stuff in node_modules folder, so we use the
* webpack-node-externals plugin.
*
* Gonna still use DefinePlugin as its a bit shorter than using global.ISDEV.
*
* Ignore types.lsc imports with StringReplacePlugin as that's just flow.
*/

const commonWebpackOptions = {
  mode: process.env.NODE_ENV,
  devtool: ISDEV ? 'source-map' : 'none',
  context: projectDir,
  module: {
    rules: [
      {
        test: /\.lsc$/,
        exclude: [
          /(node_modules)/
        ],
        enforce: "pre",
        loader: StringReplacePlugin.replace({
          replacements: [
            {
              pattern: /import.*from.*\/types\/types\.lsc'/ig,
              replacement: () => ''
            }
          ]
        })
      },
      {
        test: /.lsc/,
        exclude: [
          /(node_modules)/
        ],
        loader: 'babel-loader',
        options: {
          sourceMap: ISDEV
        }
      },
    ]
  },
  resolve: {
    extensions: ['.lsc', '.js']
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new webpack.DefinePlugin({
      ISDEV
    }),
    new StringReplacePlugin()
  ]
}

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
