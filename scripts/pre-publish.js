const fse = require('fs-extra');
const path = require('path');
const packageJson = require('../package');

const [distDirectory] = packageJson.main.trim().split('/');

createIndexScript();
copyAssets();

// creates an index script to auto select the right build - the others will be tree shaken when using webpack 4
// if you use webpack 3 and only use it for the web, you can manually import the web flavor
function createIndexScript() {
    const indexJSScript = `
const platform = process.env.RN_PLATFORM || 'web';

// bundle optimizers should be able to easily remove the extra platforms imports this way.

if (platform === 'ios') {
    module.exports = require('./ios');
}

if (platform === 'android') {
    module.exports = require('./android');
}

if (platform === 'web') {
    module.exports = require('./web');
} 
`;

    fse.writeFileSync(
        path.resolve('dist/index.js'),
        indexJSScript.trim(),
        'utf8'
    );
}

// copy the content of the assets directory
function copyAssets() {
    const distAssetsPath = path.resolve(distDirectory, 'assets');
    const srcAssetsPath = path.resolve('src', 'assets');

    fse.copy(srcAssetsPath, distAssetsPath);
}
