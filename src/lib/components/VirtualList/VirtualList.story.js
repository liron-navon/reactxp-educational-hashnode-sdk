import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import VirtualList from './VirtualList';

storiesOf('components|VirtualList', module)
    .add(
        'default',
        () => {
            // create a list of items
            const itemHeight = 64;
            const items = [
                ...Array(100)
                    .fill(0)
                    .map((_0, index) => (
                        {
                            // key and height are required
                            key: `n-${index}`,
                            height: itemHeight,
                            // add more data to help render the list items
                            number: index,
                        }
                    ))
            ];

            // create a function to render the items
            const renderListItem = ({item}) => {
                const viewStyle = {
                    height: item.height,
                    backgroundColor: `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`,
                    alignItems: 'center'
                };
                const textStyle = {
                    textAlign: 'center'
                };
                return (
                    <div style={viewStyle}>
                        <p style={textStyle}>
                            {item.number + 1}
                        </p>
                    </div>
                );
            };

            // create the actual list
            return (
                <div>
                    <p>
                        This is a list of virtual items, it renders the elements that can be seen, and appends more as you scroll,
                        For more information on how it actually work, you can visit reactxp <span><a href="https://microsoft.github.io/reactxp/docs/extensions/virtuallistview.html">reactxp virtualListView</a></span>
                    </p>

                    <VirtualList
                        style={{height: 300, maxWidth: 500, margin: 'auto'}}
                        itemList={items}
                        renderItem={renderListItem}
                        animateChanges={true}
                        skipRenderIfItemUnchanged={true}
                        onItemSelected={action('onItemSelected')}
                        onItemFocused={action('onItemFocused')}
                        onLayout={action('onLayout')}
                        onScroll={action('onScroll')}
                    />
                </div>
            )
        },
        {info: {components: {VirtualList}}}
    );
