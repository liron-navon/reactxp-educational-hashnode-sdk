import {
    VirtualListView,
    VirtualListViewItemInfo,
    VirtualListViewCellRenderDetails,
    VirtualListViewProps
} from 'reactxp-virtuallistview';
import {View, Types, Styles} from 'reactxp';
import React from 'react';
import {isWeb} from '../../utils/platform';

interface ListProps<T extends VirtualListViewItemInfo> extends VirtualListViewProps<T> {
    /** An array of items, each item must include "height" and "key" properties */
    itemList: T[]
    /** A render prop to render the item, you can access the item by "detail.item" */
    renderItem: (detail: VirtualListViewCellRenderDetails<T>) => JSX.Element
    /** Extra styling for the list container */
    style?: Types.ViewStyle
    /** Extra props for the list container */
    containerViewProps?: Types.ViewProps
}

// set some default style to make it work properly on the web
let root = {} as Types.StyleRuleSet<Types.ViewStyle>;
if (isWeb()) {
    root = Styles.createViewStyle({
        overflow: 'hidden',
        maxHeight: '100%'
    } as any)
}

/**
 * Displays a virtual list of items
 */
function VirtualList<T extends VirtualListViewItemInfo>({style, containerViewProps, ...listProps}: ListProps<T>) {
    return (
        <View {...containerViewProps} style={[root, style]}>
            <VirtualListView {...listProps}/>
        </View>
    );
}

export default VirtualList;
