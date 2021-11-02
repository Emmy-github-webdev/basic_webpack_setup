const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/index.js'
   },
   mode: 'none',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Basic Setup',
    }),
  ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 }