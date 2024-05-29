import React from 'react';
declare type AnchorProps = {
    /**
     * specifies the anchor link to the section
     */
    href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
/**
 * An anchor component with an icon for linking your docs
 */
export declare function Anchor(props: AnchorProps): JSX.Element;
export {};
