import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from './Button';
import {action} from '@storybook/addon-actions';

storiesOf('components|Button', module)
    .add('default', () => {
        return (
            <Button
                accessibilityLabel={'default button'}
                onPress={action('onPress')}
                title={'Default Button'}
                upper
            />
        )
    })
    .add('primary', () => {
        return (
            <Button
                type={'primary'}
                accessibilityLabel={'primary button'}
                onPress={action('onPress')}
                title={'Primary Button'}
                upper
            />
        )
    })
    .add('secondary', () => {
        return (
            <Button
                type={'secondary'}
                accessibilityLabel={'secondary button'}
                onPress={action('onPress')}
                title={'Secondary Button'}
                upper
            />
        )
    })
    .add('flat', () => {
        return (
            <Button
                type={'flat'}
                accessibilityLabel={'flat button'}
                onPress={action('onPress')}
                title={'Flat Button'}
                upper
            />
        )
    })
    .add('mobile style',
        () => {
            return (
                <div>
                    <Button
                        accessibilityLabel={'default button'}
                        onPress={action('onPress')}
                        title={'Default Button'}
                        upper
                        disableHoverStyle
                    />
                    <Button
                        type={'primary'}
                        accessibilityLabel={'primary button'}
                        onPress={action('onPress')}
                        title={'Flat Button'}
                        upper
                        disableHoverStyle
                    />
                    <Button
                        type={'secondary'}
                        accessibilityLabel={'secondary button'}
                        onPress={action('onPress')}
                        title={'Flat Button'}
                        upper
                        disableHoverStyle
                    />
                </div>
            )
        },
        {info: {components: {Button}}});
