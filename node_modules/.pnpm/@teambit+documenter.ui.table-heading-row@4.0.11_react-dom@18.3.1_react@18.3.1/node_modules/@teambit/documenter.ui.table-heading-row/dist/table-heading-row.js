import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { Grid } from '@teambit/base-ui.layout.grid-component';
import { HeadingColumn } from '@teambit/documenter.ui.table-heading-column';
import styles from './table-heading-row.module.scss';
export function HeadingRow({ headings, colNumber, isListView = false, className, ...rest }) {
    return (_jsx(Grid, { ...rest, col: colNumber, className: classNames(styles.titleRow, { [styles.hide]: isListView }, className), children: headings.map((title) => {
            if (title === 'required')
                return null;
            return (_jsx(HeadingColumn, { className: styles.titleCol, children: title }, title));
        }) }));
}
//# sourceMappingURL=table-heading-row.js.map