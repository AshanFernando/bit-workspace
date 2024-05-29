import { Layout } from '@teambit/base-ui.surfaces.split-pane.layout';
import type { PaneProps } from '@teambit/base-ui.surfaces.split-pane.pane';
import type { SplitterProps } from '@teambit/base-ui.surfaces.split-pane.splitter';
import React, { ReactElement } from 'react';
export declare type Size = number | string | undefined;
export declare type SplitPaneProps = React.HTMLAttributes<HTMLDivElement> & {
    size?: Size;
    layout?: Layout;
    children: [ReactElement<PaneProps>, ReactElement<SplitterProps>, ReactElement<PaneProps>];
};
export declare function SplitPane({ layout, size, className, children, ...rest }: SplitPaneProps): JSX.Element;
