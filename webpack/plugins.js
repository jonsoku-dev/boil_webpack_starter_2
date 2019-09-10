const path = require("path");
const _MiniCssExtractPlugin = require("mini-css-extract-plugin");
const _StyleLintPlugin = require("stylelint-webpack-plugin");
const _FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const _HtmlWebPackPlugin = require("html-webpack-plugin");
const _webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: "css/[name].bundle.css",
  chunkFilename: "[id].css"
});
const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, "stylelint.config.js"),
  context: path.resolve(__dirname, "../src/css"),
  files: "**/*.scss",
  failOnError: false,
  quiet: false
});
const FriendlyErrorsWebpackPlugin = new _FriendlyErrorsWebpackPlugin();

const HtmlWebPackPlugin = new _HtmlWebPackPlugin({
  inject: true,
  template: path.resolve(__dirname, "..", "src", "index.html"),
  filename: "./index.html",
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  }
});

const webpackHotModuleReplacementPlugin = new _webpack.HotModuleReplacementPlugin();

const CleanWebpackPlugIn = new CleanWebpackPlugin();

module.exports = {
  MiniCssExtractPlugin,
  StyleLintPlugin,
  FriendlyErrorsWebpackPlugin,
  HtmlWebPackPlugin,
  webpackHotModuleReplacementPlugin,
  CleanWebpackPlugIn
};
