"use strict";
/**
 * this file had been forked (and changed since then) from https://github.com/dependents/node-detective-es6
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _1 = __importDefault(require("./"));
const assert = require('assert');
describe('detective-es6', () => {
    const ast = {
        type: 'Program',
        body: [
            {
                type: 'VariableDeclaration',
                declarations: [
                    {
                        type: 'VariableDeclarator',
                        id: {
                            type: 'Identifier',
                            name: 'x',
                        },
                        init: {
                            type: 'Literal',
                            value: 4,
                            raw: '4',
                        },
                    },
                ],
                kind: 'let',
            },
        ],
    };
    it('accepts an ast', () => {
        const deps = (0, _1.default)(ast);
        const depsKeys = Object.keys(deps);
        assert(!depsKeys.length);
    });
    it('retrieves the dependencies of es6 modules', () => {
        const deps = (0, _1.default)('import {foo, bar} from "mylib";');
        const depsKeys = Object.keys(deps);
        assert(depsKeys.length === 1);
        assert(depsKeys[0] === 'mylib');
    });
    it('retrieves the re-export dependencies of es6 modules', () => {
        const deps = (0, _1.default)('export {foo, bar} from "mylib";');
        const depsKeys = Object.keys(deps);
        assert(depsKeys.length === 1);
        assert(depsKeys[0] === 'mylib');
    });
    it('retrieves the re-export * dependencies of es6 modules', () => {
        const deps = (0, _1.default)('export * from "mylib";');
        const depsKeys = Object.keys(deps);
        assert(depsKeys.length === 1);
        assert(depsKeys[0] === 'mylib');
    });
    it('handles multiple imports', () => {
        const deps = (0, _1.default)('import {foo, bar} from "mylib";\nimport "mylib2"');
        const depsKeys = Object.keys(deps);
        assert(depsKeys.length === 2);
        assert(depsKeys[0] === 'mylib');
        assert(depsKeys[1] === 'mylib2');
    });
    it('handles default imports', () => {
        const deps = (0, _1.default)('import foo from "foo";');
        const depsKeys = Object.keys(deps);
        assert(depsKeys.length === 1);
        assert(depsKeys[0] === 'foo');
    });
    it('handles dynamic imports', function () {
        const deps = (0, _1.default)('import("foo").then(foo => foo());');
        const depsKeys = Object.keys(deps);
        assert(depsKeys.length === 1);
        assert(depsKeys[0] === 'foo');
    });
    it('should support commonJS syntax', function () {
        const deps = (0, _1.default)('var foo = require("foo");');
        const depsKeys = Object.keys(deps);
        assert(depsKeys.length === 1);
        assert(depsKeys[0] === 'foo');
    });
    it('returns an empty list for empty files', function () {
        const deps = (0, _1.default)('');
        const depsKeys = Object.keys(deps);
        assert.equal(depsKeys.length, 0);
    });
    it('throws when content is not provided', function () {
        assert.throws(function () {
            // @ts-ignore
            (0, _1.default)();
        }, Error, 'src not given');
    });
    it('does not throw with jsx in a module', function () {
        assert.doesNotThrow(function () {
            (0, _1.default)("import foo from 'foo'; var templ = <jsx />;");
        });
    });
    it('does not throw on an async ES7 function', function () {
        assert.doesNotThrow(function () {
            (0, _1.default)("import foo from 'foo'; export default async function bar() {}");
        });
    });
    describe('string in apostrophes', () => {
        it('should recognize when using require statement', () => {
            const deps = (0, _1.default)('const foo = require(`foo`);'); // eslint-disable-line
            const depsKeys = Object.keys(deps);
            assert.equal(depsKeys.length, 1);
            assert.equal(depsKeys[0], 'foo');
        });
        it('should throw when using import syntax', () => {
            (0, chai_1.expect)(() => (0, _1.default)('import foo from `foo`;')).to.throw(); // eslint-disable-line
        });
    });
    describe('import-specifiers detection (for tree shaking)', () => {
        it('should recognize default imports as default', () => {
            const deps = (0, _1.default)('import foo from "foo";');
            (0, chai_1.expect)(deps).to.have.property('foo');
            // @ts-ignore
            (0, chai_1.expect)(deps.foo).to.have.property('importSpecifiers');
            // @ts-ignore
            const importSpecifier = deps.foo.importSpecifiers[0];
            (0, chai_1.expect)(importSpecifier.name).to.equal('foo');
            (0, chai_1.expect)(importSpecifier.isDefault).to.be.true;
        });
        it('should recognize non-default imports as non-default', () => {
            const deps = (0, _1.default)('import { foo } from "foo";');
            (0, chai_1.expect)(deps).to.have.property('foo');
            // @ts-ignore
            (0, chai_1.expect)(deps.foo).to.have.property('importSpecifiers');
            // @ts-ignore
            const importSpecifier = deps.foo.importSpecifiers[0];
            (0, chai_1.expect)(importSpecifier.name).to.equal('foo');
            (0, chai_1.expect)(importSpecifier.isDefault).to.be.false;
        });
        it('should support export-default-as syntax', () => {
            const deps = (0, _1.default)('export { default as foo } from "foo";');
            (0, chai_1.expect)(deps).to.have.property('foo');
            // @ts-ignore
            (0, chai_1.expect)(deps.foo).to.have.property('importSpecifiers');
            // @ts-ignore
            const importSpecifier = deps.foo.importSpecifiers[0];
            (0, chai_1.expect)(importSpecifier.name).to.equal('foo');
            (0, chai_1.expect)(importSpecifier.isDefault).to.be.true;
        });
        it('should not be supported for CommonJS', () => {
            const deps = (0, _1.default)('const foo = require("foo");');
            (0, chai_1.expect)(deps).to.have.property('foo');
            // @ts-ignore
            (0, chai_1.expect)(deps.foo).to.not.have.property('importSpecifiers');
        });
        it('should add "exported": true if the same variable has been imported and exported', () => {
            const deps = (0, _1.default)('import { foo } from "foo"; export default foo;');
            (0, chai_1.expect)(deps).to.have.property('foo');
            // @ts-ignore
            (0, chai_1.expect)(deps.foo).to.have.property('importSpecifiers');
            // @ts-ignore
            const importSpecifier = deps.foo.importSpecifiers[0];
            (0, chai_1.expect)(importSpecifier.name).to.equal('foo');
            (0, chai_1.expect)(importSpecifier.exported).to.be.true;
        });
        it('should not add "exported" property if the variable has been imported but not exported', () => {
            const deps = (0, _1.default)('import { foo } from "foo";');
            (0, chai_1.expect)(deps).to.have.property('foo');
            // @ts-ignore
            (0, chai_1.expect)(deps.foo).to.have.property('importSpecifiers');
            // @ts-ignore
            const importSpecifier = deps.foo.importSpecifiers[0];
            (0, chai_1.expect)(importSpecifier.name).to.equal('foo');
            (0, chai_1.expect)(importSpecifier).to.not.have.property('exported');
        });
    });
});
//# sourceMappingURL=detective-es6.spec.js.map