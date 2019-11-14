var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
entry: './src/main.js',
output: {
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
     template: './src/index.html'
    })
  ],

  module:{
      rules:[
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },

          {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
          },

            {
                test: /\.(png|jpg|gif)$/,
                use:{
                 loader: 'url-loader',
                  options:{
                    limit:30*1024
                  }
                }
            },

            {
              test: /\.(eot|svg|ttf|woff)$/,
              use: {
                loader: 'url-loader',
            options: {
             limit: 30 * 1024
                }
              }
            },

            {
              test: /\.js$/,

              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
      
      ]
  },

  devServer: {
    port: 9800,
    open: true,
    hot: true
  }



}