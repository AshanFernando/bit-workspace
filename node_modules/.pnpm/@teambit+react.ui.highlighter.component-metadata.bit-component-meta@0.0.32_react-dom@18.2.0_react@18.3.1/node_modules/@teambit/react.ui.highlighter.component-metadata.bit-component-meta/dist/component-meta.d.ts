import type { ComponentType } from 'react';
export declare const componentMetaField = "__bit_component";
export declare const componentMetaProperties: {
    readonly componentId: "id";
    readonly homepageUrl: "homepage";
    readonly isExported: "exported";
};
export declare type ComponentMeta = {
    [componentMetaProperties.componentId]: string;
    [componentMetaProperties.homepageUrl]?: string;
    [componentMetaProperties.isExported]?: boolean;
};
export interface ComponentMetaHolder {
    [componentMetaField]: ComponentMeta;
}
export declare type ReactComponentMetaHolder = ComponentType & ComponentMetaHolder;
export declare function hasComponentMeta(component: any): component is ComponentMetaHolder;
