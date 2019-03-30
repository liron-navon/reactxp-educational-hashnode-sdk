import React from 'react';
import renderer from 'react-test-renderer';
import VirtualList from './VirtualList';

const items = [
    {
        key: 1,
        text: 'hello world',
        height: 50
    }
];

test(`VirtualList renders correctly`, () => {
    const tree = renderer.create(
        <VirtualList
            renderItem={({text}) => (<div>{text}</div>)}
            itemList={items}/>
    )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
