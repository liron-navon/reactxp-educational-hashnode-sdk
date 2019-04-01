import {configure, addDecorator, addParameters} from '@storybook/react';
import {withInfo} from "@storybook/addon-info";
import {withA11y} from '@storybook/addon-a11y';
import packageJson from '../package';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

function loadStories() {
    // make sure the home page is loaded first - so when we build it will be the default page
    require('../src/wiki/home.story');
    // importing each section individually allows me to set their order in storybook
    requireAll(require.context('../src/wiki', true, /.story\.(ts|js)x?$/));
    requireAll(require.context('../src/lib/components', true, /.story\.(ts|js)x?$/));
    requireAll(require.context('../src/lib/utils', true, /.story\.(ts|js)x?$/));
    requireAll(require.context('../src/lib/theming', true, /.story\.(ts|js)x?$/));
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
        name: packageJson.name,
        hierarchySeparator: /\//,
        hierarchyRootSeparator: /\|/,
    },
});
