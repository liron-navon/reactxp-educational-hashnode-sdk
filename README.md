# Reactxp Educational Hashnode SDK

You can check out the full documentation and examples here: [https://reactxp-educational-hashnode-sdk.netlify.com](https://reactxp-educational-hashnode-sdk.netlify.com)

---

All of the components in this library can be used on react-native (android/ios) and on the web thanks to reactxp.

This is a demo components and logic package to show how to build a cross platform SDK with reactXP.

The Article link will be posted here once it is published 😅, this library will be used to build a cross platform simplified clone for [LastPass](https://www.lastpass.com/), including react-native, web, chrome extension and a firefox extension.

---

## Scripts:

#### Starting
Will start storybook in [http://localhost:9009/](http://localhost:9009/)
```
npm start
```

#### Testing 
Will run tests using Jest.
```
npm run test:mobile # test for web only
npm run test:web # test for mobile only

npm run test # test for mobile and web
```

#### Building:
Build with webpack
```
npm run build:ios # build for ios
npm run build:android # build for android
npm run build:web # build for web

npm run build:all # build for all the platforms
npm run build:publish # build for publishing
```

#### Building documentation:
Create a storybook build
```
npm run storybook:build
```
