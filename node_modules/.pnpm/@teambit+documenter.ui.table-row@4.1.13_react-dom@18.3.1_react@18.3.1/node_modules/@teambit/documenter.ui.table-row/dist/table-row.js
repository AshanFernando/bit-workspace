import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { Grid } from '@teambit/base-ui.layout.grid-component';
import { TableColumn } from '@teambit/documenter.ui.table-column';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import xcode from 'react-syntax-highlighter/dist/esm/styles/hljs/xcode';
import styles from './table-row.module.scss';
/**
 *
 * Renders a row in the table according to the order of the headings.
 */
export function TableRow({ row, customRow, colNumber = 4, headings, isListView, className, ...rest }) {
    return (_jsx(Grid, { col: colNumber, className: classNames(styles.propRow, {
            [styles.singleColumn]: isListView,
        }, className), ...rest, children: headings.map((title) => {
            const keyString = `${title}-${row[title]}`;
            if (title === 'required')
                return null;
            if (title === 'name') {
                return (_jsxs(TableColumn, { className: styles.breakWord, children: [_jsx("div", { className: classNames(styles.mobileTitle, {
                                [styles.show]: isListView,
                            }), children: title }), _jsxs("div", { className: styles.columnContent, children: [_jsx("div", { className: styles.name, children: customRow?.name || row[title] }), !customRow?.required && row.required && (_jsx("div", { className: styles.required, children: "(Required)" })), customRow?.required && (_jsx("div", { className: styles.required, children: customRow.required }))] })] }, keyString));
            }
            if (title === 'type') {
                return (_jsxs(TableColumn, { className: classNames(styles.breakWord, styles.typeColumn), children: [_jsx("div", { className: classNames(styles.mobileTitle, {
                                [styles.show]: isListView,
                            }), children: title }), !customRow?.type && (_jsx(SyntaxHighlighter, { theme: xcode, language: "javascript", className: styles.highlighted, children: row[title] })), customRow?.type] }, keyString));
            }
            if (title === 'default') {
                return (_jsxs(TableColumn, { className: styles.breakWord, children: [_jsx("div", { className: classNames(styles.mobileTitle, {
                                [styles.show]: isListView,
                            }), children: title }), !customRow?.default && (_jsx("span", { className: styles.default, children: (row[title] && row[title]?.value) || '-' })), customRow?.default && (_jsx("span", { className: styles.default, children: customRow.default }))] }, keyString));
            }
            if (title === 'description') {
                return (_jsx(TableColumn, { className: styles.breakWord, children: customRow?.description || row[title] }, keyString));
            }
            // default
            return (_jsxs(TableColumn, { className: styles.breakWord, children: [_jsx("div", { className: classNames(styles.mobileTitle, {
                            [styles.show]: isListView,
                        }), children: title }), customRow?.[title] || row[title]] }, keyString));
        }) }));
}
//# sourceMappingURL=table-row.js.map