import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import nested from 'postcss-nested'
import postcssImport from 'postcss-import'
import cssnano from 'cssnano'

export default {
  input: 'src/index.js',
  output: 
  [
    {
      file: 'dist/reco.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/reco.umd.js',
      format: 'umd',
      name: 'Reco'
    },
    {
      file: 'dist/reco.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    nodeResolve(), // 解析依赖的引用
    commonjs(),
    json(),
    postcss({
      plugins: [postcssImport, autoprefixer, nested, cssnano],
      extract: 'index.css',
    }),
  ]
}