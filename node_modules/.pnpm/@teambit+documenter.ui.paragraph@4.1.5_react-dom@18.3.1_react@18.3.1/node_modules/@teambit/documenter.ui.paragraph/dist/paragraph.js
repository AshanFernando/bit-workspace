"use strict";
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
exports.Paragraph = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const base_ui_text_paragraph_1 = require("@teambit/base-ui.text.paragraph");
const base_ui_theme_sizes_1 = require("@teambit/base-ui.theme.sizes");
const paragraph_module_scss_1 = __importDefault(require("./paragraph.module.scss"));
/**
 * Paragraph component prototype. Accepts all properties of a native Paragraph element.
 */
function Paragraph(_a) {
    var { children, className, size } = _a, rest = __rest(_a, ["children", "className", "size"]);
    const paragraphSize = size ? base_ui_theme_sizes_1.PossibleSizes[size] : base_ui_theme_sizes_1.PossibleSizes.md;
    return (react_1.default.createElement(base_ui_text_paragraph_1.Paragraph, Object.assign({ size: paragraphSize }, rest, { className: (0, classnames_1.default)(paragraph_module_scss_1.default.paragraph, className) }), children));
}
exports.Paragraph = Paragraph;
Paragraph.defaultProps = {
    size: 'md',
    element: 'p',
};
//# sourceMappingURL=paragraph.js.map