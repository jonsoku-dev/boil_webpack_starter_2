const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = (env, options) => {
  const config = {
    // mode
    mode: options.mode,
    // devtool
    devtool: '',
    // entry
    entry: ['@babel/polyfill', path.resolve(__dirname, '..', 'src', 'js', 'main.js')],
    // module
    module: {
      rules: [loaders.CSSLoader, loaders.JSLoader, loaders.ESLintLoader, loaders.urlLoader],
    },

    // plugins
    plugins: [
      plugins.MiniCssExtractPlugin,
      plugins.StyleLintPlugin,
      plugins.FriendlyErrorsWebpackPlugin,
    ],

    // output
    output: {
      path: path.resolve(__dirname, '..', 'dist'),
      filename: 'js/[name].bundle.js',
    },
  };

  if (options.mode === 'development') {
    config.devtool = 'inline-source-map';
    config.plugins.push(plugins.webpackHotModuleReplacementPlugin);
    config.plugins.push(plugins.HtmlWebPackPlugin);
    // dev server
    config.devServer = {
      contentBase: path.resolve(__dirname, '..', 'src'),
      openPage: './',
      host: 'localhost',
      stats: {
        color: true,
      },
      port: 8000,
      inline: true,
      overlay: true,
      historyApiFallback: true,
      disableHostCheck: true,
      quiet: true,
    };
  } else if (options.mode === 'production') {
    config.plugins.push(plugins.CleanWebpackPlugIn);
  }

  return config;
};
