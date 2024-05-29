import { CompileOutput } from './compile-output';
export declare type MDXCompileOptions = {
    remarkPlugins: any[];
    rehypePlugins: any[];
    compilers: any[];
    filepath?: string;
    renderer: string;
    bitFlavour: boolean;
};
export declare const DEFAULT_RENDERER = "\n// @ts-nocheck\nimport React from 'react'\nimport { mdx } from '@mdx-js/react'\n\n/* @jsxRuntime classic */\n/* @jsx mdx */\n";
/**
 * compile an mdx file with frontmatter formatted (yaml) metadata.
 * example:
 * ```
 * ---
 * title: Something
 * labels: ['some', 'labels']
 * ---
 * ```
 */
export declare function compile(content: string, options?: Partial<MDXCompileOptions>): Promise<CompileOutput>;
export declare function wrapWithScopeContext(): (tree: any, file: any) => void;
/**
 * sync compilation of mdx content.
 * @param mdxContent
 * @param options
 */
export declare function compileSync(mdxContent: string, options?: Partial<MDXCompileOptions>): CompileOutput;
