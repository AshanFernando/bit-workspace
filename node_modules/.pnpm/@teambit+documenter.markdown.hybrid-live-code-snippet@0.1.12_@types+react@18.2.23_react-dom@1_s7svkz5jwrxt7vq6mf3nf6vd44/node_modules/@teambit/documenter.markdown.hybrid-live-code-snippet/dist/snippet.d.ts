import React from 'react';
import { CodeScope } from '@teambit/documenter.code.react-playground';
export type { CodeScope } from '@teambit/documenter.code.react-playground';
export declare type SnippetProps = {
    children: string;
    scope?: CodeScope;
    live?: boolean | string;
};
export declare function Snippet({ children, scope, live }: SnippetProps): React.JSX.Element;
