import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';
import {Text} from 'reactxp';

test(`Card renders correctly`, () => {
    const tree = renderer.create((
        <Card>
            <Text>
                Hello world
            </Text>
        </Card>
    )).toJSON();
    expect(tree).toMatchSnapshot();
});
