const path = require('path')
const createExpoWebPackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const config = await createExpoWebPackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['nativewind']
      }
    },
    argv
  )
  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: [
    ]
  })
  return config
}
