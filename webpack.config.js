const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    menu: './src/module/menuTab.js',
    home: './src/module/homeTab.js',
    contact: './src/module/contactTab.js',  
    util: './src/util.js',          
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};