import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';
import {Platform} from 'reactxp';

test(`Button renders correctly`, () => {
    const tree = renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot(Platform.getType());
});
