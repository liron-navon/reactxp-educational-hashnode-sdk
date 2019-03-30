import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './TextInput';
import {Platform} from 'reactxp';

test(`TextInput renders correctly`, () => {
    const tree = renderer.create(<TextInput/>).toJSON();
    expect(tree).toMatchSnapshot(Platform.getType());
});
