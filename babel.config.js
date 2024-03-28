module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['nativewind/babel', { mode: 'compile' }] // Asegúrate de tener algo así para NativeWind
    ]
  }
}
