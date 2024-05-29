/**
 * Import Specifier data.
 * For example, `import foo from './bar' `, "foo" is the import-specifier and is default.
 * Conversely, `import { foo } from './bar' `, here, "foo" is non-default.
 */
export declare type Specifier = {
    isDefault: boolean;
    name: string;
    exported?: boolean;
};
/**
 * Extracts the dependencies of the supplied es6 module
 *
 * @param  {String|Object} src - File's content or AST
 * @return {String[]}
 */
export declare function detective(src: any): {
    [dependency: string]: {
        importSpecifiers: Specifier[];
    };
};
