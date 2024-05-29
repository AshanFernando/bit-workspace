import React, { HTMLAttributes } from 'react';
export interface SplitterProps extends HTMLAttributes<HTMLDivElement> {
    isDragging?: boolean;
    onDragging?: (v: React.SetStateAction<boolean>) => void;
}
export declare function Splitter({ onDragging, isDragging, className, ...rest }: SplitterProps): JSX.Element;
