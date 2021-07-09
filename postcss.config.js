const autoprefixer = require("autoprefixer");
const postcssRTLCSS = require('postcss-rtlcss');

module.exports = () => ({
  plugins: [
    autoprefixer({
      browsers: ["last 2 versions"]
    }),
    postcssRTLCSS(),
  ]
});