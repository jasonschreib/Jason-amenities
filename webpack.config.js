module.exports = {
  entry: __dirname + '/client/src/app.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules, .env/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};