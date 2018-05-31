import path from 'path'
import fs from 'fs'

import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

// https://github.com/rollup/rollup-plugin-node-resolve/issues/77
const pkg = JSON.parse(fs.readFileSync(path.resolve('./package.json'), 'utf-8'))
const external = Object.keys(pkg.dependencies || {})

export default {
  input: 'app/main/appMain.lsc',
  output: {
    file: 'app/main/appMain-compiled.js',
    format: 'cjs'
  },
  extensions: [ '.lsc', '.js'],
  plugins: [
    commonjs(),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    json(),
  ],
  external,
  watch: {
    include: '**/*.lsc',
    exclude: 'node_modules/**'
  }
}
