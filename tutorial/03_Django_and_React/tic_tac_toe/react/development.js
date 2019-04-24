import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const src  = path.resolve(__dirname, 'src')             // ビルド前の.jsxファイルの場所
const dist = path.resolve(__dirname, '../static/js/')   // ビルド後のファイルの置き場

export default {
  mode: 'development',
  // 入力ソースの設定
  entry: src + '/index.jsx',

  // 出力設定
  output: {
    path: dist,
    filename: 'index.js'
  },

  // おまじない
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  // おまじない
  resolve: {
    extensions: ['.js','jsx']
  }
}