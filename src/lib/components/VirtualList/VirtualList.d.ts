/// <reference types="react" />
import { VirtualListViewItemInfo, VirtualListViewCellRenderDetails, VirtualListViewProps } from 'reactxp-virtuallistview';
import { Types } from 'reactxp';
interface ListProps<T extends VirtualListViewItemInfo> extends VirtualListViewProps<T> {
    /** An array of items, each item must include "height" and "key" properties */
    itemList: T[];
    /** A render prop to render the item, you can access the item by "detail.item" */
    renderItem: (detail: VirtualListViewCellRenderDetails<T>) => JSX.Element;
    /** Extra styling for the list container */
    style?: Types.ViewStyle;
    /** Extra props for the list container */
    containerViewProps?: Types.ViewProps;
}
/**
 * Displays a virtual list of items
 */
declare function VirtualList<T extends VirtualListViewItemInfo>({ style, containerViewProps, ...listProps }: ListProps<T>): JSX.Element;
export default VirtualList;
