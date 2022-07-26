const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcss([
      require('cssnano'),
      require('postcss-combine-media-query')
    ]),
    postcssPresetEnv({
      stage: 2,
      minimumVendorImplementations: 2,
      autoprefixer: { grid: true },
      browsers: 'last 2 versions'
    }),

  ]
}