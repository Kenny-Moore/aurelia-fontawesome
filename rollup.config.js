// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';


export default {
  input: 'dist/es2015/exports.js',
  output: {
    file: 'bundle.js',
    format: 'es'
  },
  plugins: [ 
    resolve(),
    commonjs()  
  ]
};