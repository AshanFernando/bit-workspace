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
export declare function getDependenciesFromMemberExpression(node: any): any;
export declare function getDependenciesFromCallExpression(node: any): any;
export declare function getSpecifierValueForImportDeclaration(specifier: any): Specifier;
