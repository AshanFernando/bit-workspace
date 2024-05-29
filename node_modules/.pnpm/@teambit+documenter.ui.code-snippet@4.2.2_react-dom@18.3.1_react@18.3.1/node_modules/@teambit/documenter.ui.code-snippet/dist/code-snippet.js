"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeSnippet = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
const prism_light_1 = __importDefault(require("react-syntax-highlighter/dist/esm/prism-light"));
const tsx_1 = __importDefault(require("react-syntax-highlighter/dist/esm/languages/prism/tsx"));
const vsc_dark_plus_1 = __importDefault(require("react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus"));
const documenter_ui_copied_message_1 = require("@teambit/documenter.ui.copied-message");
const code_snippet_module_scss_1 = __importDefault(require("./code-snippet.module.scss"));
prism_light_1.default.registerLanguage('tsx', tsx_1.default);
const customStyles = { fontFamily: 'roboto mono', fontSize: 12 };
/**
 * A code snippet component
 */
function CodeSnippet(_a) {
    var { className, frameClass, theme = vsc_dark_plus_1.default, language = 'tsx', children } = _a, rest = __rest(_a, ["className", "frameClass", "theme", "language", "children"]);
    const [isCopied, setIsCopied] = (0, react_1.useState)(false);
    const handleClick = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
        (0, copy_to_clipboard_1.default)(children.toString());
    };
    const trimmedChildren = (0, react_1.useMemo)(() => children.trim(), [children]);
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(code_snippet_module_scss_1.default.snippetWrapper, className) },
        react_1.default.createElement(Highlighter, Object.assign({}, rest, { className: (0, classnames_1.default)(code_snippet_module_scss_1.default.codeSnippet, frameClass), language: language, style: theme, customStyle: customStyles }), trimmedChildren),
        react_1.default.createElement("div", { className: code_snippet_module_scss_1.default.copy },
            react_1.default.createElement(documenter_ui_copied_message_1.CopiedMessage, { show: isCopied }),
            react_1.default.createElement("img", { src: "https://static.bit.cloud/Community/icons/copy.svg", onClick: handleClick, className: code_snippet_module_scss_1.default.copyIcon, alt: "Copy" }))));
}
exports.CodeSnippet = CodeSnippet;
const Highlighter = (0, react_1.memo)(function SnippetWrapper(props) {
    return react_1.default.createElement(prism_light_1.default, Object.assign({}, props));
});
//# sourceMappingURL=code-snippet.js.map