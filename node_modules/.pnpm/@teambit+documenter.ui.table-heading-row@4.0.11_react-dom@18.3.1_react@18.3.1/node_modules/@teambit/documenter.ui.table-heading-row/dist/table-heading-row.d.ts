/// <reference types="react" />
import { GridProps } from '@teambit/base-ui.layout.grid-component';
export type ColNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type HeadingRowProps = {
    /**
     * array of strings to be displayed in the title row
     */
    headings: string[];
    /**
     * number of columns in the row
     */
    colNumber: ColNumber;
    /**
     * display mobile styles
     */
    isListView?: boolean;
} & GridProps;
export declare function HeadingRow({ headings, colNumber, isListView, className, ...rest }: HeadingRowProps): JSX.Element;
