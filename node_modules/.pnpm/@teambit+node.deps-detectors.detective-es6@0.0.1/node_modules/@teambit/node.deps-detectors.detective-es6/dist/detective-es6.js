"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detective = void 0;
const node_deps_detectors_parser_helper_1 = require("@teambit/node.deps-detectors.parser-helper");
/**
 * this file had been forked (and changed since then) from https://github.com/dependents/node-detective-es6
 */
// @ts-ignore
const Walker = require('node-source-walk');
/**
 * Extracts the dependencies of the supplied es6 module
 *
 * @param  {String|Object} src - File's content or AST
 * @return {String[]}
 */
function detective(src) {
    const walker = new Walker();
    const dependencies = {};
    const addDependency = (dependency) => {
        if (!dependencies[dependency]) {
            dependencies[dependency] = {};
        }
    };
    const addImportSpecifier = (dependency, importSpecifier) => {
        if (dependencies[dependency].importSpecifiers) {
            dependencies[dependency].importSpecifiers.push(importSpecifier);
        }
        else {
            dependencies[dependency].importSpecifiers = [importSpecifier];
        }
    };
    const addExportedToImportSpecifier = (name) => {
        Object.keys(dependencies).forEach((dependency) => {
            if (!dependencies[dependency].importSpecifiers)
                return;
            const specifier = dependencies[dependency].importSpecifiers.find((i) => i.name === name);
            if (specifier)
                specifier.exported = true;
        });
    };
    if (typeof src === 'undefined') {
        throw new Error('src not given');
    }
    if (src === '') {
        return dependencies;
    }
    walker.walk(src, function (node) {
        var _a, _b;
        switch (node.type) {
            case 'ImportDeclaration':
                if (node.source && node.source.value) {
                    const dependency = node.source.value;
                    addDependency(dependency);
                    node.specifiers.forEach((specifier) => {
                        const specifierValue = (0, node_deps_detectors_parser_helper_1.getSpecifierValueForImportDeclaration)(specifier);
                        addImportSpecifier(dependency, specifierValue);
                    });
                }
                break;
            case 'ExportNamedDeclaration':
            case 'ExportAllDeclaration':
                if (node.source && node.source.value) {
                    const dependency = node.source.value;
                    addDependency(dependency);
                    if (node.specifiers) {
                        // in case of "export * from" there are no node.specifiers
                        node.specifiers.forEach((specifier) => {
                            const specifierValue = {
                                isDefault: !specifier.local || specifier.local.name === 'default',
                                name: specifier.exported.name,
                                exported: true,
                            };
                            addImportSpecifier(dependency, specifierValue);
                        });
                    }
                }
                else if (node.specifiers && node.specifiers.length) {
                    node.specifiers.forEach((exportSpecifier) => {
                        addExportedToImportSpecifier(exportSpecifier.exported.name);
                    });
                }
                break;
            case 'ExportDefaultDeclaration':
                addExportedToImportSpecifier(node.declaration.name);
                break;
            case 'ImportExpression': {
                // node represents Dynamic Imports such as import(source)
                if ((_a = node.source) === null || _a === void 0 ? void 0 : _a.value)
                    addDependency((_b = node.source) === null || _b === void 0 ? void 0 : _b.value);
                break;
            }
            case 'CallExpression':
                {
                    const value = (0, node_deps_detectors_parser_helper_1.getDependenciesFromCallExpression)(node);
                    if (value)
                        addDependency(value);
                }
                break;
            case 'MemberExpression':
                {
                    const value = (0, node_deps_detectors_parser_helper_1.getDependenciesFromMemberExpression)(node);
                    if (value)
                        addDependency(value);
                }
                break;
            default:
                break;
        }
    });
    return dependencies;
}
exports.detective = detective;
//# sourceMappingURL=detective-es6.js.map