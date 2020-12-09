const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProduction = env ? env.production : undefined
  // const CSSExtract = new ExtractTextPlugin('styles.css')
  console.log(isProduction)
  console.log('env',env)
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
      , {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        // CSSExtract.extract({
        //   use: [
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         sourceMap: true
        //       }
        //     },
        //     {
        //       loader: 'sass-loader',
        //       options: {
        //         sourceMap: true
        //       }
        //     }
        //   ]
        // })
      }
    ]
    },
    plugins: [
      // CSSExtract
      new MiniCssExtractPlugin()
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}
