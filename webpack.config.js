var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = { 
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/main.jsx',
  ],
  output: { path: __dirname, publicPath: '/', filename: 'bundle.js' },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {   
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      babelrc: false,
      presets: [
        'react',
        'es2015',
        'stage-0',
      ],
    }] 
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3100,
        proxy: 'http://localhost:3000/'
      }, {
        // prevent BrowserSync from reloading the page 
        // and let Webpack Dev Server take care of this 
        reload: false
      }

    )
  ]
};
