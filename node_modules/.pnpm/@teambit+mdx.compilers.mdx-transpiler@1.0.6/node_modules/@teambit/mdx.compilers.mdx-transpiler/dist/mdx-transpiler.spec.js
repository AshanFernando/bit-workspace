"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
const chai_1 = require("chai");
const mdx_transpiler_1 = require("./mdx-transpiler");
describe('MDXTranspiler', () => {
    describe('compile()', () => {
        describe('simple file (mocks/simple.mdx)', () => {
            const simpleFile = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, 'mocks', 'simple.mdx'), 'utf-8');
            let output;
            beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
                output = yield (0, mdx_transpiler_1.compile)(simpleFile);
            }));
            it('should extract the file title and labels from the file header', () => __awaiter(void 0, void 0, void 0, function* () {
                (0, chai_1.expect)(output.getMetadata()).to.deep.eq({
                    title: 'My Component',
                    labels: ['first', 'component'],
                });
            }));
            it('should compile the markdown into a react component and export as default', () => __awaiter(void 0, void 0, void 0, function* () {
                (0, chai_1.expect)(output.contents).to.include('export default function MDXContent');
            }));
            it('should not include the metadata in the compiled code', () => __awaiter(void 0, void 0, void 0, function* () {
                (0, chai_1.expect)(output.contents).to.not.include('My Component');
                (0, chai_1.expect)(output.contents).to.not.include(`['first', 'component']`);
            }));
            it('should include the default renderer', () => {
                (0, chai_1.expect)(output.contents).to.include(mdx_transpiler_1.DEFAULT_RENDERER);
            });
        });
        describe('empty headers', () => {
            const emptyHeadersFile = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, 'mocks', 'no-headers.mdx'), 'utf-8');
            let output;
            beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
                output = yield (0, mdx_transpiler_1.compile)(emptyHeadersFile);
            }));
            it('should not include any metadata', () => {
                (0, chai_1.expect)(output.getMetadata()).to.be.undefined;
            });
            it('should compile the markdown into a react component and export as default', () => __awaiter(void 0, void 0, void 0, function* () {
                (0, chai_1.expect)(output.contents).to.include('export default function MDXContent');
            }));
            it('should include the mdx content in the component', () => {
                (0, chai_1.expect)(output.contents).to.include('My very new component.');
            });
        });
        describe('parse import statements', () => {
            it('should parse import statements with new lines separating them', () => __awaiter(void 0, void 0, void 0, function* () {
                const importFile = `import a from 'a';

import b from 'b';
`;
                const output = yield (0, mdx_transpiler_1.compile)(importFile);
                const importSpecifiers = output.getImportSpecifiers();
                (0, chai_1.expect)(importSpecifiers).to.have.lengthOf(2);
                const modules = importSpecifiers.map((specifier) => specifier.fromModule);
                (0, chai_1.expect)(modules).to.deep.equal(['a', 'b']);
            }));
        });
    });
});
//# sourceMappingURL=mdx-transpiler.spec.js.map