const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require("path");


module.exports = {
  mode: "production",
  entry: [path.resolve("src/index.js")],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            plugins: ["react-hot-loader/babel"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: [
                    ">1%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 10"
                  ]
                })
              ]
            }
          }
        ]
      },
      {test: /\.(jpe?g|png|gif|ico)$/i, loader: 'file-loader?name=[name].[ext]'}
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  output: {
    path: path.resolve("dist"),
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  //CSS can be extracted in one CSS file
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          test: /\.(css|sass|scss)$/,
          name: 'styles',
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HTMLWebpackPlugin({
      template: path.resolve("public/index.html")
    })
  ]
};
