import { ReactNode } from 'react';
import { Components } from './mdx-scope-context';
export declare type MDXScopeProviderProps = {
    /**
     * map of components to be available in the scope.
     */
    components: Components;
    /**
     * component children.
     */
    children: ReactNode;
};
export declare function MDXScopeProvider({ components, children }: MDXScopeProviderProps): JSX.Element;
