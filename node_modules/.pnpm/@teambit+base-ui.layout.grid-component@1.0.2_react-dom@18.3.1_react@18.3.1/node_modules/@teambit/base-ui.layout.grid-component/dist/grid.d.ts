import React, { PureComponent } from 'react';
export declare type ColCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare type GridProps = {
    /**
     * default column count (1-12)
     */
    col?: ColCount;
    /**
     * column count at extremely small devices
     */
    colXs?: ColCount;
    /**
     * column count at mobile screens
     */
    colSm?: ColCount;
    /**
     * column count at medium devices
     */
    colMd?: ColCount;
    /**
     * column count at tablets
     */
    colL?: ColCount;
    /**
     * default column count at laptops
     */
    colLg?: ColCount;
    /**
     * default column count at desktop
     */
    colXl?: ColCount;
} & React.HTMLAttributes<HTMLDivElement>;
/**
 * A responsive css-grid wrapper.
 * Use the `col` properties to set column count in each resolution.
 */
export declare class Grid extends PureComponent<GridProps> {
    render(): React.JSX.Element;
}
