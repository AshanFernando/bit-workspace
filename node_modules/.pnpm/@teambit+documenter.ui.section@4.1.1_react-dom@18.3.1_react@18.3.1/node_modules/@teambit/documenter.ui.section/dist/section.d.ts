import React from 'react';
export declare type SectionProps = {
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
/**
 *
 * A wrapper component that separates the page into semantic sections.
 */
export declare function Section({ className, children, ...rest }: SectionProps): JSX.Element;
