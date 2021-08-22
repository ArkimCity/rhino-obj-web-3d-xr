
const path = require("path");
module.exports = {
  outputDir: path.resolve(__dirname, "../docs"),
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-3-github-page-template/'
    : '/'
}