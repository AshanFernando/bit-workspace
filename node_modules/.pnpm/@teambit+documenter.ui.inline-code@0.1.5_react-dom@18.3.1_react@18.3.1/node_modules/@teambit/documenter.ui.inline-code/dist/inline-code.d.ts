import React from 'react';
export declare type InlineCodeProps = React.HTMLAttributes<HTMLElement> & {
    /** colors the background with accent color */
    highlight?: boolean;
};
/**
 * A <p> element with text highlighting
 */
export declare function InlineCode({ children, highlight, className, ...rest }: InlineCodeProps): JSX.Element;
