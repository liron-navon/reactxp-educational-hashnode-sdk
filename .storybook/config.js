import {configure, addDecorator, addParameters} from '@storybook/react';
import {withInfo} from "@storybook/addon-info";
import {withA11y} from '@storybook/addon-a11y';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

function loadStories() {
    const rootEl = document.getElementById('root');
    rootEl.classList.add('app-container');

    // make sure the home page is loaded first - so when we build it will be the default page
    require('../src/wiki/home.story');
    requireAll(require.context('../src/lib/wiki', true, /.story\.(ts|js)x?$/));
    requireAll(require.context('../src/lib/components', true, /.story\.(ts|js)x?$/));
    requireAll(require.context('../src/lib/utils', true, /.story\.(ts|js)x?$/));
}

configure(loadStories, module);

addDecorator(
    withInfo({
        header: true,
        inline: true,
    })
);
addDecorator(withA11y);

addParameters({
    options: {
        name: 'Foo',
        theme: themes.dark,
    },
});
