import React from 'react';
import {storiesOf} from '@storybook/react';
import readmeMD from '../../README.md';
import MarkdownRenderer from '../storybook-utils/MarkdownRenderer';

storiesOf('wiki', module)
    .add('home',
        () => <MarkdownRenderer source={readmeMD}/>,
        {info: {disable: true}});
