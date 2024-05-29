import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import styles from './table-heading-column.module.scss';
/**
 * Title heading column for using in the table heading
 */
export function HeadingColumn({ children, className, ...rest }) {
    return (_jsx("div", { className: classNames(styles.headingColumn, className), ...rest, children: _jsx("div", { className: classNames(styles.title), children: children }) }));
}
//# sourceMappingURL=table-heading-column.js.map