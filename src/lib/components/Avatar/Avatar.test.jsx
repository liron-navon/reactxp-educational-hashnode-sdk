import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './Avatar';

test(`Avatar renders correctly`, () => {
    const tree = renderer.create(<Avatar source={'😓'}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
