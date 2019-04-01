import React from 'react';
import {storiesOf} from '@storybook/react';
import Card from './Card';

storiesOf('components|Card', module)
    .add('default', () => {
        return (
            <Card>
                <div>
                    <h3>
                        Cards are fun
                    </h3>
                    <p>
                        They help with creating the layout
                    </p>
                </div>
            </Card>
        )
    });
