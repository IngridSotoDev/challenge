const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'],
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new Dotenv()],
  devServer: {
    open: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    liveReload: true,
    historyApiFallback: true,
    compress: true,
    port: 8080,
  },
}
