import React from 'react';
/**
 * a paragraph component
 */
export declare type ParagraphProps = {
    /**
     * Font size (from a list of presets).
     */
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    /**
     * The underlying html element
     */
    element?: 'p' | 'div' | 'span';
} & React.HTMLAttributes<HTMLParagraphElement>;
/**
 * Paragraph component prototype. Accepts all properties of a native Paragraph element.
 */
export declare function Paragraph({ children, className, size, ...rest }: ParagraphProps): JSX.Element;
export declare namespace Paragraph {
    var defaultProps: {
        size: string;
        element: string;
    };
}
