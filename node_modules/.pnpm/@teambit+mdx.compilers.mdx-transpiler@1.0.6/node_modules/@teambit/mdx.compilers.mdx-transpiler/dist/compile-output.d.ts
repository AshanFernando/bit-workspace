import { VFile } from 'vfile';
import { ImportSpecifier } from './import-specifier';
/**
 * compilation output of bit-mdx format.
 */
export declare class CompileOutput {
    readonly file: VFile;
    private _renderer;
    constructor(file: VFile, _renderer: string);
    get renderer(): string;
    changeRenderer(renderer: string): void;
    /**
     * get the mdx file metadata.
     */
    getMetadata(): any;
    /**
     * get all import specifiers.
     */
    getImportSpecifiers(): ImportSpecifier[];
    /**
     * get the mdx file contents. including the renderer.
     */
    get contents(): string;
}
