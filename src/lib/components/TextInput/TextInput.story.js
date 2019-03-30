import React from 'react';
import {storiesOf} from '@storybook/react';
import TextInput from './TextInput';
import {action} from '@storybook/addon-actions';

storiesOf('components/TextInput', module)
    .add('default', () => {
        return (
            <TextInput
                label='Add email label'
                accessibilityLabel={'Add email'}
                placeholder={'john@doe.com'}
                onChangeText={action('onChange')}
            />
        )
    });
