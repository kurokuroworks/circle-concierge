const path = require('path');

module.exports = {
  entry: './client/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'server/public/')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
