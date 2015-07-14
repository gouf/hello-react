module.exports = {
  progress: true,
  entry: ['./src/Hello.cjsx'],
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.cjsx$/, loaders: ['coffee-loader', 'cjsx-loader']
      }
    ]
  }
};
