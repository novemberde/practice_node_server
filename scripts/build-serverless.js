const webpack = require('webpack');
const config = require('../config/webpack.config.prod');

module.exports = webpack(config, () => {
  console.log("Production build complete");
});