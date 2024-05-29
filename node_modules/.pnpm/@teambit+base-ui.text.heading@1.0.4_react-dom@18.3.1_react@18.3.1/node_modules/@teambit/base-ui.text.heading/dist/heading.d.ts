import React from 'react';
export declare type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export declare type HeadingProps = {
    /**
     * underlying html element ("h1", "h2", etc)
     */
    element?: Element;
} & React.HTMLAttributes<HTMLHeadingElement>;
/**
 * Base title component, to be styled by composing components.
 * May have more logic in the future.
 * @example
 * <Heading element="h3">This is a title</Heading>
 */
export declare function Heading({ element, ...rest }: HeadingProps): JSX.Element;
