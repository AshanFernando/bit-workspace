import { Layout } from '@teambit/base-ui.surfaces.split-pane.layout';
import React from 'react';
export declare type PaneProps = React.HTMLAttributes<HTMLDivElement> & {
    size?: number | string;
    layout?: Layout;
};
export declare function Pane({ size, style, layout, className, ...rest }: PaneProps): JSX.Element;
