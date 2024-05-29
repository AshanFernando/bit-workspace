/// <reference types="react" />
import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';
export declare type CodeSnippetProps = {
    /**
     * the code string to show and to be copied to clipboard
     */
    children: string;
    /**
     * a class to override the highlighter class
     */
    frameClass?: string;
    /**
     * the theme to be used in the highlighter
     */
    theme?: any;
} & SyntaxHighlighterProps;
/**
 * A code snippet component
 */
export declare function CodeSnippet({ className, frameClass, theme, language, children, ...rest }: CodeSnippetProps): JSX.Element;
