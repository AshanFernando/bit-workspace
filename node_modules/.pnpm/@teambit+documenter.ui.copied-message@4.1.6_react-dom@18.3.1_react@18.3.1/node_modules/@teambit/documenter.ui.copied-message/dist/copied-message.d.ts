import React from 'react';
declare type AnchorProps = {
    /**
     * show the copied message component
     */
    show?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>;
/**
 * A component to indicate when the required text has been copied
 */
export declare function CopiedMessage({ className, show, ...rest }: AnchorProps): JSX.Element;
export {};
