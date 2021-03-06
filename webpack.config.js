module.exports = {

  entry: "./js/controller.js",
  output: {
    path: "./dist",
    publicPath: "http://localhost:9966/webpack-dev-server/",
    filename: "bundle.js"
  },
  module: {
    preLoaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "jshint-loader"
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    alias: {
      // used when requiring jquery in modules
      'jquery-path': '../node_modules/jquery/src/jquery.js'
    }
  }
};