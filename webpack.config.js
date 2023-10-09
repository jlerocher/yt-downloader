const {webpackConfig} = require('react-scripts');

// Merge with custom config  
module.exports = {
  ...webpackConfig,
  resolve: {
      fallback: {
        "path": require.resolve("path-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify")
      }
    }
  }
