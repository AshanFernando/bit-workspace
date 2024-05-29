"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkDocs = exports.NoopDocs = exports.ButtonDocs = exports.Preview = void 0;
const react_1 = __importDefault(require("react"));
const mdx_layout_1 = require("./mdx-layout");
// loading mdx files relies on bit's builtin mdx-loader support.
// @ts-ignore
const example_all_md_mdx_1 = __importDefault(require("./example-all-md.mdx"));
// @ts-ignore
const example_button_mdx_1 = __importDefault(require("./example-button.mdx"));
// @ts-ignore
const example_noop_mdx_1 = __importDefault(require("./example-noop.mdx"));
// @ts-ignore
const example_routing_link_mdx_1 = __importDefault(require("./example-routing-link.mdx"));
const Preview = () => {
    return (react_1.default.createElement(mdx_layout_1.MDXLayout, { style: { padding: 16, maxWidth: 1440, margin: 'auto' } },
        react_1.default.createElement(example_all_md_mdx_1.default, null)));
};
exports.Preview = Preview;
const ButtonDocs = () => {
    return (react_1.default.createElement(mdx_layout_1.MDXLayout, { style: { padding: 16, maxWidth: 1440, margin: 'auto' } },
        react_1.default.createElement(example_button_mdx_1.default, null)));
};
exports.ButtonDocs = ButtonDocs;
const NoopDocs = () => {
    return (react_1.default.createElement(mdx_layout_1.MDXLayout, { style: { padding: 16, maxWidth: 1440, margin: 'auto' } },
        react_1.default.createElement(example_noop_mdx_1.default, null)));
};
exports.NoopDocs = NoopDocs;
const LinkDocs = () => {
    return (react_1.default.createElement(mdx_layout_1.MDXLayout, { style: { padding: 16, maxWidth: 1440, margin: 'auto' } },
        react_1.default.createElement(example_routing_link_mdx_1.default, null)));
};
exports.LinkDocs = LinkDocs;
//# sourceMappingURL=mdx.compositions.js.map