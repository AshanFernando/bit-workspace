"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileSync = exports.wrapWithScopeContext = exports.compile = exports.DEFAULT_RENDERER = void 0;
const mdx_1 = __importDefault(require("@mdx-js/mdx"));
const remark_frontmatter_1 = __importDefault(require("remark-frontmatter"));
const unist_util_visit_1 = __importDefault(require("unist-util-visit"));
const unist_util_remove_1 = __importDefault(require("unist-util-remove"));
const remark_admonitions_1 = __importDefault(require("remark-admonitions"));
const node_deps_detectors_detective_es6_1 = __importDefault(require("@teambit/node.deps-detectors.detective-es6"));
const yaml_1 = __importDefault(require("yaml"));
const vfile_1 = __importDefault(require("vfile"));
const compile_output_1 = require("./compile-output");
exports.DEFAULT_RENDERER = `
// @ts-nocheck
import React from 'react'
import { mdx } from '@mdx-js/react'

/* @jsxRuntime classic */
/* @jsx mdx */
`;
function computeOptions(opts) {
    const defaultOptions = {
        remarkPlugins: [remark_admonitions_1.default],
        compilers: [],
        renderer: exports.DEFAULT_RENDERER,
        bitFlavour: true,
    };
    return Object.assign(defaultOptions, opts);
}
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
function compile(content, options = {}) {
    const contentFile = getFile(content, options.filepath);
    return new Promise((resolve, reject) => {
        const opts = computeOptions(options);
        const mdxCompiler = createCompiler(opts);
        mdxCompiler.process(contentFile, (err, file) => {
            if (err)
                return reject(err);
            const output = new compile_output_1.CompileOutput(file, exports.DEFAULT_RENDERER);
            return resolve(output);
        });
    });
}
exports.compile = compile;
function wrapWithScopeContext() {
    return (tree, file) => {
        var _a;
        const imports = ((_a = file.data) === null || _a === void 0 ? void 0 : _a.imports) || [];
        const ids = imports.reduce((identifiers, importSpecifier) => {
            const newIds = [];
            if (importSpecifier.identifier)
                newIds.push(importSpecifier.identifier);
            return identifiers.concat(newIds);
        }, []);
        const preNode = {
            type: 'jsx',
            value: `<MDXScopeProvider components={{${ids.join(', ')}}}>`,
        };
        const postNode = {
            type: 'jsx',
            value: `</MDXScopeProvider>`,
        };
        tree.children.unshift({
            type: 'import',
            value: `import { MDXScopeProvider } from '@teambit/mdx.ui.mdx-scope-context';`,
        });
        tree.children.unshift(preNode);
        tree.children.push(postNode);
    };
}
exports.wrapWithScopeContext = wrapWithScopeContext;
/**
 * sync compilation of mdx content.
 * @param mdxContent
 * @param options
 */
function compileSync(mdxContent, options = {}) {
    const contentFile = getFile(mdxContent, options.filepath);
    const opts = computeOptions(options);
    const mdxCompiler = createCompiler(opts);
    const file = mdxCompiler.processSync(contentFile);
    return new compile_output_1.CompileOutput(file, exports.DEFAULT_RENDERER);
}
exports.compileSync = compileSync;
function createCompiler(options) {
    const mustPlugins = options.bitFlavour
        ? [[remark_frontmatter_1.default, ['yaml']], extractMetadata, extractImports]
        : [extractImports];
    const mustRehypePlugins = options.bitFlavour ? [wrapWithScopeContext] : [];
    const compilerOpts = Object.assign(options, {
        remarkPlugins: options.remarkPlugins ? mustPlugins.concat(options.remarkPlugins) : mustPlugins,
        rehypePlugins: options.rehypePlugins ? mustRehypePlugins.concat(options.rehypePlugins) : mustRehypePlugins,
    });
    const mdxCompiler = mdx_1.default.createCompiler(compilerOpts);
    return mdxCompiler;
}
function extractMetadata() {
    return function transformer(tree, file) {
        (0, unist_util_visit_1.default)(tree, 'yaml', (node) => {
            try {
                file.data.frontmatter = yaml_1.default.parse(node.value, { prettyErrors: true });
            }
            catch (err) {
                throw new Error(`failed extracting metadata/front-matter using Yaml lib, due to an error (please disregard the line/column): ${err.message}`);
            }
        });
    };
}
function extractImports() {
    return function transformer(tree, file) {
        (0, unist_util_visit_1.default)(tree, 'import', (node) => {
            var _a;
            const es6Import = (0, node_deps_detectors_detective_es6_1.default)(node.value);
            const imports = Object.keys(es6Import).flatMap((dep) => {
                if (!es6Import[dep].importSpecifiers) {
                    return {
                        fromModule: dep,
                    };
                }
                return es6Import[dep].importSpecifiers.map((importSpecifier) => ({
                    fromModule: dep,
                    identifier: importSpecifier.name,
                    isDefault: importSpecifier.isDefault,
                }));
            });
            ((_a = file.data).imports || (_a.imports = [])).push(...imports);
        });
        (0, unist_util_remove_1.default)(tree, 'yaml');
    };
}
function getFile(contents, path) {
    if (!path)
        return (0, vfile_1.default)(contents);
    const contentFile = (0, vfile_1.default)({ contents, path });
    return contentFile;
}
//# sourceMappingURL=mdx-transpiler.js.map