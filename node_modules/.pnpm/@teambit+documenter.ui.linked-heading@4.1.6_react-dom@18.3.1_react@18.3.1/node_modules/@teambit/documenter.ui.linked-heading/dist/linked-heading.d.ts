import React from 'react';
import type { Sizes, Element } from '@teambit/documenter.ui.heading';
export type { Sizes, Element };
export declare type LinkedHeadingProps = {
    /**
     * title string
     */
    children: React.ReactNode;
    /**
     * anchor link to section
     */
    link?: string;
    /**
     * font size override for title string [optional]
     */
    size?: Sizes;
    /**
     * heading html element ("h1", "h2", etc)
     */
    element?: Element;
} & React.HTMLAttributes<HTMLDivElement>;
/**
 * section heading with anchor link
 */
export declare function LinkedHeading({ children, link, size, element, className, ...rest }: LinkedHeadingProps): JSX.Element;
