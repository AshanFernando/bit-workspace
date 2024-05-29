/// <reference types="mdx-js__react" />
import React, { ReactNode } from 'react';
import { MDXProviderComponents } from '@mdx-js/react';
export type { MDXProviderComponents } from '@mdx-js/react';
export interface MDXLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    components?: MDXProviderComponents;
}
/** bit flavored MDX theme */
export declare function MDXLayout({ children, components, className, ...rest }: MDXLayoutProps): React.JSX.Element;
