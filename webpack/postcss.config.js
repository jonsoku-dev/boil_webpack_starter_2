module.exports = () => ({
  plugins: {
    autoprefixer: { grid: true, flexbox: true },
    "postcss-import": {},
    "postcss-preset-env": {
      browsers: "last 2 versions"
    },
    "postcss-flexbugs-fixes": {},
    "rucksack-css": {},
    "postcss-font-magician": {
      variants: {
        "Roboto Condensed": {
          "300": [],
          "400": [],
          "700": []
        }
      },
      foundries: ["google"]
    },
    cssnano: {}
  }
});
