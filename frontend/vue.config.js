
const path = require("path");
module.exports = {
  outputDir: path.resolve(__dirname, "../docs"),
  // publicPath: './rhino-and-obj-to-web3d-xr/',
  // assetsDir: "./rhino-and-obj-to-web3d-xr/"
  publicPath: process.env.NODE_ENV === 'production'
    ? '/rhino-and-obj-to-web3d-xr/'
    : '/'
}