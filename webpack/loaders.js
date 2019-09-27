const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  },
};
const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: `${__dirname}/.eslintrc`,
    },
  },
};
const CSSLoader = {
  test: /\.(sa|sc|c)ss$/,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'css-loader',
      options: { sourceMap: true },
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: `${__dirname}/postcss.config.js`,
        },
        sourceMap: true,
      },
    },
    {
      loader: 'sass-loader',
      options: { sourceMap: true },
    },
  ],
};

const urlLoader = {
  test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: 'url-loader',
  options: {
    publicPath: '../img',
    outputPath: './img',
    name: '[name].[ext]?[hash]',
    limit: 10000,
  },
};

module.exports = {
  JSLoader,
  ESLintLoader,
  CSSLoader,
  urlLoader,
};
