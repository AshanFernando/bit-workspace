import React from 'react';
export declare type CodeScope = {
    [key: string]: any;
};
export declare type PlaygroundProps = {
    /**
     * stringified version of the example
     */
    code: string;
    /**
     * any dependencies required by the code example
     */
    scope?: CodeScope;
    /**
     * css inline styles object to override the outer styles of the playground
     */
    style?: React.CSSProperties;
    /** class name of the wrapping element */
    className?: string;
};
/**
 *
 * A react-live wrapper with document oriented features.
 */
export declare function Playground({ code, scope, style, className, ...rest }: PlaygroundProps): React.JSX.Element;
