module.exports = {
    "preset": "react-native",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json"
    ],
    "testMatch": null,
    "testRegex": "\\.test.(ts|js)x$",
    "transform": {
        "^.+\\.(js|tsx?)$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
        "^.+\\.jsx?$": "babel-jest"
    },
    "testPathIgnorePatterns": [
        "\\.snap$",
        "<rootDir>/node_modules/"
    ],
    "snapshotResolver": '<rootDir>/scripts/jestSnapshotResolvers/custom-resolver-mobile.js'
};
