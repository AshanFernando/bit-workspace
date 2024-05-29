import { HTMLAttributes } from 'react';
export declare type ThemedTextProps = HTMLAttributes<HTMLSpanElement>;
/**
 * Text colored with the current base color.
 *
 * using css variable:
 * -   --bit-accent-color
 * @name ThemedText
 */
export declare function ThemedText(props: ThemedTextProps): JSX.Element;
/**
 * Same component as a pure-css class.
 * @name themedText
 */
export declare const themedText: string;
