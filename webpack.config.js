var webpack = require('webpack');
var path = require('path');
var glob = require('glob');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/components');

var config = {
  entry: {
	  //FIXME add multiple react components
	  //index: APP_DIR + '/index.jsx'
	  //,
	  chat: APP_DIR + '/chat.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map'
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
