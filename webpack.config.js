const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    menu: './src/module/menuTab.js',
    home: './src/module/homeTab.js',
    contact: './src/module/contactTab.js',           
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};