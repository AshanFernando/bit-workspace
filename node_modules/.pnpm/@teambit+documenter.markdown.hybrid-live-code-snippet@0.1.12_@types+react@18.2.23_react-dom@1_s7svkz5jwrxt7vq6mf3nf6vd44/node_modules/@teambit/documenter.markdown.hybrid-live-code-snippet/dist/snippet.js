"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snippet = void 0;
const react_1 = __importDefault(require("react"));
const documenter_ui_code_snippet_1 = require("@teambit/documenter.ui.code-snippet");
const documenter_code_react_playground_1 = require("@teambit/documenter.code.react-playground");
const snippet_module_scss_1 = __importDefault(require("./snippet.module.scss"));
function Snippet({ children, scope, live }) {
    if (live) {
        return (react_1.default.createElement(documenter_code_react_playground_1.Playground, { className: snippet_module_scss_1.default.snippet, code: children, scope: scope }));
    }
    return react_1.default.createElement(documenter_ui_code_snippet_1.CodeSnippet, { className: snippet_module_scss_1.default.snippet }, children);
}
exports.Snippet = Snippet;
//# sourceMappingURL=snippet.js.map