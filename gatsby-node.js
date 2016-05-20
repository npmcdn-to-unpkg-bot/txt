exports.modifyWebpackConfig = function(config, env) {
  config.loader('jpg', {
    test: /\.jpe?g$/,
    loader: 'null',
  })


  return config
}

