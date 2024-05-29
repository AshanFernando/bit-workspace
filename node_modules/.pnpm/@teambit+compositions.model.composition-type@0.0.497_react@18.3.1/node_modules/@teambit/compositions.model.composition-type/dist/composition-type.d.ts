import { CSSProperties, ComponentType } from 'react';
export declare type CompositionsModule = Record<string, CompositionType>;
export declare type CompositionType<P = {}> = ComponentType<P> & {
    canvas?: CSSProperties;
    compositionName?: string;
};
