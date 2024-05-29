import { Layout } from '@teambit/base-ui.surfaces.split-pane.layout';
import { Size } from './split-pane';
import { DragSnapshot } from './use-drag-tracker';
export declare function calcSplit(snapshot: DragSnapshot | undefined, layout: Layout, defaultSize: Size): [Size, Size];
