import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { HeadingRow } from "@teambit/documenter.ui.table-heading-row";
import { TableRow } from "@teambit/documenter.ui.table-row";
import styles from './table.module.scss';
/**
 * A table component that renders the properties of a component.
 */
export function Table({ headings, rows, colNumber, isListView, className, ...rest }) {
    const cols = colNumber || 4;
    return (_jsxs("div", { ...rest, className: classNames(styles.table, className), children: [_jsx(HeadingRow, { isListView: isListView, colNumber: cols, headings: headings }), rows.map((row) => {
                return (_jsx(TableRow, { isListView: isListView, headings: headings, row: row, colNumber: cols }, `tableRow-${row.name}`));
            })] }));
}
Table.defaultProps = {
    colNumber: 4,
};
//# sourceMappingURL=table.js.map