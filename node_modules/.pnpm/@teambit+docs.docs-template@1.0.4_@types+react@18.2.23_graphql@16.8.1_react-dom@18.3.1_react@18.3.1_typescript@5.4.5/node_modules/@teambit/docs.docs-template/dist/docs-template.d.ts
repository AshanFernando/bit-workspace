import { ComponentType } from 'react';
import { DocsRootProps } from '@teambit/docs';
/**
 * a reference to a provider function.
 */
export type DocsProvider = ComponentType<{
    children: any;
}>;
export declare function createDocsTemplate(Provider?: DocsProvider, docsRootElement?: Element): {
    ({ componentId, docs, compositions, context, }: DocsRootProps): void;
    apiObject: boolean;
};
