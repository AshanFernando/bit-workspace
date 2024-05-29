"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompileSyncExample = void 0;
const react_1 = __importDefault(require("react"));
const json_formatter_js_1 = __importDefault(require("json-formatter-js"));
const documenter_theme_theme_compositions_1 = require("@teambit/documenter.theme.theme-compositions");
const mdx_transpiler_1 = require("./mdx-transpiler");
const mdxInput = `
  ---
  title: MDX Compiler
  labels: ['compiler', 'transpiler, 'mdx', 'node']
  description: Bit MDX format compiler/transpiler.
  ---

  import { compileSync } from './mdx-transpiler';

  The MDX transpiler enables the compilation of Bit-flavoured MDX files. That includes parsing-out and removing Bit's frontmatter properties (which are part of the Bit flavored MDX) from the output code.
  In addition to that, the MDX transpiler creates a React context provider that wraps the entire JSX tree (produced by the MDX file) to make all imported modules available to be used by all instances of the live playground.
  This is an example of Bit flavoured MDX:

  # A markdown title
  `;
const CompileSyncExample = () => {
    const result = (0, mdx_transpiler_1.compileSync)(mdxInput, {
        bitFlavour: true,
    });
    const dataContent = new json_formatter_js_1.default(result, 2);
    return (react_1.default.createElement(documenter_theme_theme_compositions_1.ThemeCompositions, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { ref: (nodeElement) => {
                    nodeElement && nodeElement.replaceWith(dataContent.render());
                } }))));
};
exports.CompileSyncExample = CompileSyncExample;
//# sourceMappingURL=mdx-transpiler.composition.js.map