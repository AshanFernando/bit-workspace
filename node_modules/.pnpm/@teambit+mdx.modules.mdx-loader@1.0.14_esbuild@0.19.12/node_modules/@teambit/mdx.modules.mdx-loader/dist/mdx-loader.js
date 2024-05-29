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
exports.mdxLoader = void 0;
const loader_utils_1 = require("loader-utils");
const mdx_compilers_mdx_transpiler_1 = require("@teambit/mdx.compilers.mdx-transpiler");
/**
 * bit-mdx webpack loader.
 * this loader allows compilation of Bit flavoured MDX in webpack.
 * @see http://bit.dev/teambit/mdx/modules/compiler for more information re Bit-flavour MDX compilation.
 */
function mdxLoader(content) {
    return __awaiter(this, void 0, void 0, function* () {
        // @ts-ignore
        const callback = this.async();
        // @ts-ignore
        const options = Object.assign({}, (0, loader_utils_1.getOptions)(this), {
            // @ts-ignore
            filepath: this.resourcePath,
        });
        try {
            const output = yield (0, mdx_compilers_mdx_transpiler_1.compile)(content, options);
            return callback(null, output.contents);
        }
        catch (err) {
            return callback(err, null);
        }
    });
}
exports.mdxLoader = mdxLoader;
//# sourceMappingURL=mdx-loader.js.map