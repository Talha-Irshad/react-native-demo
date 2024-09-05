module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ["module:react-native-dotenv"],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@utils': './src/utils',
          '@api_services': './src/api_services',
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@redux': './src/redux',
          '@validations_schemas': './src/validations_schemas',
          '@screen': './src/screens',
          '@config': './src/config',
          '@navigation': './src/navigation',
        }
      }
    ]
  ]
};
