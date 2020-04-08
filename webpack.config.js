const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   entry: path.join(__dirname, 'src', 'index.tsx'),
   output: {
       path: path.join(__dirname, 'build'),
       filename: 'main.bundle.js',
       publicPath: ''
   },
   // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module:{
       rules:[
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader'
                },
            },
           {
               test: /\.scss$/,
               loader: [
                   MiniCSSExtractPlugin.loader,
                   'css-loader',
                   'sass-loader'
               ]
           },
           {
               test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
               use: [
                   {
                       loader: 'url-loader',
                       options: {
                           limit: 10000
                       }
                   }
               ]
           },
           {
            test: /\.(pdf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]'
                }
              }
            ]
          }
       ]
   },
   plugins: [
       new MiniCSSExtractPlugin(),
       new HtmlWebpackPlugin({
           template: './public/index.html',
           filename: './index.html',
           favicon: './public/favicon.ico',
           manifest: './public/manifest.json'
       }),
       new Dotenv()
   ],
   devServer: {
       contentBase: path.resolve(__dirname, './public'),
       port: 3000,
       inline: true,
       open: true,
       historyApiFallback: true
   }
}
