const { defaults: tsjPreset } = require('ts-jest/presets');

module.export = {
  ...tsjPreset,
  "preset": "react-native",
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    }
  },
};
