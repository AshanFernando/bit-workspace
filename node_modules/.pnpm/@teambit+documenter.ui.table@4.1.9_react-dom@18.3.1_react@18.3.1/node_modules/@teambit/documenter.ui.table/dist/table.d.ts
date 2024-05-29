import React from "react";
import { RowType } from "@teambit/documenter.ui.table-row";
export type ColNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type TableProps = {
    /**
     * the heading row, by which the table data is ordered
     */
    headings: string[];
    /**
     * the data to be shown in the table
     */
    rows: RowType[];
    /**
     * the number of columns to show in the table
     */
    colNumber?: ColNumber;
    /**
     * display mobile styles
     */
    isListView?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
/**
 * A table component that renders the properties of a component.
 */
export declare function Table({ headings, rows, colNumber, isListView, className, ...rest }: TableProps): JSX.Element;
export declare namespace Table {
    var defaultProps: {
        colNumber: number;
    };
}
