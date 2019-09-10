module.exports = () => ({
  plugins: {
    autoprefixer: { grid: true, flexbox: true },
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: 'last 2 versions'
    },
    cssnano: {}
  }
});
