module.exports = {
  packages: {
    'nativescript-cognito': {
      entryPoints: {
        angular: {
          override: {
            main: './fesm2015/nativescript-cognito.js',
            typings: './nativescript-cognito.d.ts',
          },
          ignoreMissingDependencies: true,
        },
      },
      ignorableDeepImportMatchers: [/tns-core-modules\//, /@nativescript\/core\//, /@nativescript\/angular\//],
    },
  }
};