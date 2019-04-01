import React from 'react';
import {storiesOf} from '@storybook/react';
import md from './createRootComponent.md';
import MarkdownRenderer from '../../../storybook-utils/MarkdownRenderer';

storiesOf('utils|createRootComponent', module)
    .add('createRootComponent',
        () => <MarkdownRenderer source={md}/>,
        {info: {disable: true}});
