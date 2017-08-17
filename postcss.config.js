const postcssCssnext = require('postcss-cssnext');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    postcssCssnext(),
    cssnano({
      autoprefixer: false,
      discardComments: {
        removeAll: true,
      },
      discardUnused: false,
      mergeIdents: false,
      reduceIdents: false,
      safe: true,
      sourcemap: true,
    }),
  ],
};
