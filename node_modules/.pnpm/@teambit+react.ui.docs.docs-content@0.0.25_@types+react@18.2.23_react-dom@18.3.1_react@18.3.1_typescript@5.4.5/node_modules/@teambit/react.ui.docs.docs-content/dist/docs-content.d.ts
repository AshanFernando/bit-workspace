import type { Docs } from '@teambit/docs';
import { SectionProps } from '@teambit/documenter.ui.section';
import React from 'react';
export interface DocsContentProps extends SectionProps {
    docs?: Docs;
}
export declare function DocsContent({ docs, ...rest }: DocsContentProps): React.JSX.Element;
