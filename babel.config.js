module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        'root': ['./'],
        'alias': {
          '@Components': './src/components',
          '@Assets': './src/assets',
          '@Core': './src/core',
          '@Navigation': './src/navigation',
          '@Screens': './src/screens',
          '@Theme': './src/theme',
          '@Store': './src/store',
          '@Hooks': './src/hooks',
          '@App': './src/app',
        },
      },
    ],
    'react-native-worklets/plugin'
  ],
};
