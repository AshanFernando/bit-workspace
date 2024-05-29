"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnippetLiveExample = exports.SnippetExample = void 0;
const react_1 = __importDefault(require("react"));
const snippet_1 = require("./snippet");
const code = `<div>simple div element</div>`;
const SnippetExample = () => {
    return react_1.default.createElement(snippet_1.Snippet, null, code);
};
exports.SnippetExample = SnippetExample;
const SnippetLiveExample = () => {
    return (react_1.default.createElement("div", { style: { width: 600, height: 100 } },
        react_1.default.createElement(snippet_1.Snippet, { live: true }, code)));
};
exports.SnippetLiveExample = SnippetLiveExample;
//# sourceMappingURL=snippet.composition.js.map