import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import sass from 'rollup-plugin-sass';

import packageJSON from './package.json';

export default {
  input: 'src/index.js',
  output: [{ name: 'tour.js', file: packageJSON.browser, format: 'umd' }],
  plugins: [
    commonjs(),
    babel({ babelHelpers: 'bundled', presets: ['@babel/preset-env'] }),
    nodeResolve(),
    terser(),
    sass({ output: 'dist/style.css', outputStyle: 'compressed' }),
  ],
};
