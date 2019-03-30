module.exports = (customSnapshotExtension) => {
    return {
        /** resolves from test to snapshot path */
        resolveSnapshotPath: (testPath, snapshotExtension) => {
            return testPath.replace('src/', `__snapshots__/`) + customSnapshotExtension
        },

        /** resolves from snapshot to test path */
        resolveTestPath: (snapshotFilePath, snapshotExtension) => {
            return snapshotFilePath
                .replace(`__snapshots__/`, 'src/')
                .slice(0, -customSnapshotExtension.length)
        },
        testPathForConsistencyCheck: '',
    };
};
