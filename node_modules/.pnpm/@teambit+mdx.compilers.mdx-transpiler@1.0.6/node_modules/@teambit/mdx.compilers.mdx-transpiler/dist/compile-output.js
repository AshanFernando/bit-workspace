"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompileOutput = void 0;
/**
 * compilation output of bit-mdx format.
 */
class CompileOutput {
    constructor(file, _renderer) {
        this.file = file;
        this._renderer = _renderer;
    }
    get renderer() {
        return this._renderer;
    }
    changeRenderer(renderer) {
        this._renderer = renderer;
    }
    /**
     * get the mdx file metadata.
     */
    getMetadata() {
        const data = this.file.data;
        return data.frontmatter;
    }
    /**
     * get all import specifiers.
     */
    getImportSpecifiers() {
        const data = this.file.data;
        return data.imports;
    }
    /**
     * get the mdx file contents. including the renderer.
     */
    get contents() {
        return `${this.renderer}\n${this.file.contents}`;
    }
}
exports.CompileOutput = CompileOutput;
//# sourceMappingURL=compile-output.js.map