const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'client/');
const APP_DIR = path.resolve(__dirname, 'src/');

module.exports = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include : APP_DIR,
        exclude: /node_modules/,
        use : ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  }
};