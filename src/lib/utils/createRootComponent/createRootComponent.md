**You can use `renderRootComponent` to render the root view of the project, this is not necessary for web, but it for mobile, it's recommended to use it in web anyway.**

**Web**: It is expected that you will have a `app-container` class on the root element, it is a requirement from reactxp.

**Mobile**: You should export the return value from `renderRootComponent()` at the root app for expo projects.

---

```jsx harmony
import React from 'react';
import {View, Text} from 'react-native';
import {renderRootComponent, Card} from 'reactxp-educational-hashnode-sdk';

const wrappedRootView = renderRootComponent(
    () => (
        <Card>
            <Text>
                My Root View
            <Text/>
        <Card/>
    );
);

/* you should export it on react native */
export default wrappedRootView;
```
