import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'


export default {
  import: './src/index.js',
  output: {
    format: 'umd',
    file: 'dist/umd/vue.js',
    name: 'Vue',
    sourcemap: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    process.NODE_ENV === 'development' ? serve({
      open: true,
      openPage: '/public/index.html',
      port: 3000,
      contentBase: ''
    }): null
  ]

}