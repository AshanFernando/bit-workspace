import React from 'react';
import { RowType } from '@teambit/documenter.ui.table-row';
export type PropTableProps = {
    /**
     * the data to be shown in the table
     */
    rows: RowType[];
    /**
     * resolution to show table in list view
     */
    listViewResolution?: number;
    /**
     * show list view
     */
    showListView?: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
/**
 * A table component that renders the properties of a component. The headings array determines how the data in the table is ordered.
 * The number of columns is 4 by default.
 */
export declare function PropTable({ rows, listViewResolution, showListView, ...rest }: PropTableProps): JSX.Element;
export declare namespace PropTable {
    var defaultProps: {
        listViewResolution: number;
    };
}
