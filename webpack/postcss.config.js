module.exports = () => ({
  plugins: {
    autoprefixer: { grid: true, flexbox: true },
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: '> 0% in JP',
    },
    'postcss-flexbugs-fixes': { bug8a: false },
    'rucksack-css': {},
    'postcss-font-magician': {
      variants: {
        'Roboto Condensed': {
          300: [],
          400: [],
          700: [],
        },
      },
      foundries: ['google'],
    },
    cssnano: {
      preset: ['default'],
    },
    'postcss-combine-duplicated-selectors': true,
    'css-declaration-sorter': { order: 'smacss' },
  },
});
