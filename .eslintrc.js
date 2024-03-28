module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'standard',
    'standard-jsx',
    'standard-react'
  ],
  plugins: [
    'react',
    'promise',
    'import',
    'node'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  env: {
    es6: true,
    node: true,
    'react-native/react-native': true,
  },
  rules: {
    // Personaliza tus reglas aquí
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
