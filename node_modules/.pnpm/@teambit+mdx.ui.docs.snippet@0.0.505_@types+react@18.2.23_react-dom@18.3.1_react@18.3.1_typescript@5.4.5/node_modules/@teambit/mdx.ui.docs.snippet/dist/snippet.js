"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snippet = void 0;
const react_1 = __importStar(require("react"));
const mdx_ui_mdx_scope_context_1 = require("@teambit/mdx.ui.mdx-scope-context");
const react_2 = require("@mdx-js/react");
const documenter_markdown_hybrid_live_code_snippet_1 = require("@teambit/documenter.markdown.hybrid-live-code-snippet");
function Snippet(_a) {
    var { scope } = _a, rest = __rest(_a, ["scope"]);
    const components = (0, react_1.useContext)(mdx_ui_mdx_scope_context_1.MDXScopeContext);
    const _scope = (0, react_1.useMemo)(() => (Object.assign(Object.assign(Object.assign({}, components), { mdx: react_2.mdx }), scope)), [components, scope, react_2.mdx]);
    return react_1.default.createElement(documenter_markdown_hybrid_live_code_snippet_1.Snippet, Object.assign({ scope: _scope }, rest));
}
exports.Snippet = Snippet;
//# sourceMappingURL=snippet.js.map