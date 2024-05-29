import React from 'react';
import { PossibleSizes } from '@teambit/base-ui.theme.sizes';
export { PossibleSizes };
export declare type ParagraphProps = {
    /**
     * Font size (from a list of presets).
     */
    size: PossibleSizes;
    /**
     * The underlying html element
     */
    element: 'p' | 'div' | 'span';
} & React.HTMLAttributes<HTMLParagraphElement>;
/**
 * Paragraph component prototype. Accepts all properties of a native Paragraph element,
 * @name paragraph
 * @example
 * <Paragraph size="sm">This is some text</Paragraph>
 */
export declare function Paragraph({ className, size, element: Element, ...rest }: ParagraphProps): JSX.Element;
export declare namespace Paragraph {
    var defaultProps: {
        size: string;
        element: string;
    };
}
