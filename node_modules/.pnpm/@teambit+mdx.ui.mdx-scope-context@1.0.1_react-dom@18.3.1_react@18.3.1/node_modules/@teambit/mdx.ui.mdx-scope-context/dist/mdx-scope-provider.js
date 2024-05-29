"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MDXScopeProvider = void 0;
const react_1 = __importDefault(require("react"));
const mdx_scope_context_1 = require("./mdx-scope-context");
function MDXScopeProvider({ components, children }) {
    return react_1.default.createElement(mdx_scope_context_1.MDXScopeContext.Provider, { value: components }, children);
}
exports.MDXScopeProvider = MDXScopeProvider;
//# sourceMappingURL=mdx-scope-provider.js.map