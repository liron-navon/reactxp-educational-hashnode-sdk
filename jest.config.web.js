module.exports = {
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json"
    ],
    "testMatch": null,
    "testRegex": "\\.(test|web-test).(ts|js)x$",
    "transform": {
        "^.+\\.(js|ts)x?$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
        "^.+\\.jsx?$": "babel-jest"
    },
    "testPathIgnorePatterns": [
        "\\.snap$",
        "<rootDir>/node_modules/"
    ],
    "snapshotResolver": '<rootDir>/scripts/jestSnapshotResolvers/custom-resolver-web.js'
};
