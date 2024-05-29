import React, { RefObject } from 'react';
export declare type DragSnapshot = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare function useDragTracker(containerRef: RefObject<HTMLDivElement>): [DragSnapshot, boolean, React.Dispatch<React.SetStateAction<boolean>>];
