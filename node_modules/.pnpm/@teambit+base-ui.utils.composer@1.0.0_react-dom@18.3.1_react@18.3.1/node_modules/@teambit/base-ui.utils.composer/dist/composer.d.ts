import { ReactNode, ComponentType } from 'react';
export declare type ComponentTuple<T = any> = [Component: ComponentType<T>, props?: T];
export declare type Wrapper<T = any> = ComponentType<T> | ComponentTuple<T>;
export interface ComposerProps<T = any> {
    /** Compose these components. Can be a ReactComponent, or a [ReactComponent, Props] tuple */
    components?: Wrapper<T>[];
    children?: ReactNode;
}
/**
 * A react Component composer, equivalent to `Compose(n+1) := <a[n+1]> <Compose(n) /> </a[n+1]>`.
 * Component can be a React Component, or a `[ Component, { props } ]` tuple.
 */
export declare function Composer(props: ComposerProps): JSX.Element;
