import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
import styles from "./table-column.module.scss";
/**
 *
 * a column to be shown in the table
 */
export function TableColumn({ children, className, ...rest }) {
    return (_jsx("div", { className: classNames(styles.tableColumn, className), ...rest, children: children }));
}
//# sourceMappingURL=table-column.js.map