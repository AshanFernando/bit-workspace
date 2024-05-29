import { jsx as _jsx } from "react/jsx-runtime";
// @ts-ignore - missing types
import useDimensions from 'react-use-dimensions';
import { useDebounce } from 'use-debounce';
import { Table } from '@teambit/documenter.ui.table';
/**
 * A table component that renders the properties of a component. The headings array determines how the data in the table is ordered.
 * The number of columns is 4 by default.
 */
export function PropTable({ rows, listViewResolution, showListView, ...rest }) {
    const [ref, { width }] = useDimensions();
    const debouncedSize = useDebounce(width, 300, { leading: true });
    const isListView = showListView || +debouncedSize[0] <= (listViewResolution || 0);
    if (!width)
        return _jsx("div", { ref: ref });
    return (_jsx("div", { ref: ref, children: _jsx(Table, { ...rest, headings: ['name', 'type', 'default', 'description'], rows: rows, isListView: isListView }) }));
}
PropTable.defaultProps = {
    listViewResolution: 768,
};
//# sourceMappingURL=prop-table.js.map