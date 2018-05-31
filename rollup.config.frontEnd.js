import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
  input: 'app/frontEnd/settingsWindowMain.lsc',
  output: {
    file: 'app/frontEnd/settingsWindowMain-compiled.js',
    format: 'cjs'
  },
  extensions: [ '.lsc', '.js'],
  plugins: [
    commonjs(),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
  ],
  watch: {
    include: '**/*.lsc',
    exclude: 'node_modules/**'
  }
}
