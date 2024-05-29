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
exports.Paragraph = exports.PossibleSizes = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const base_ui_theme_sizes_1 = require("@teambit/base-ui.theme.sizes");
Object.defineProperty(exports, "PossibleSizes", { enumerable: true, get: function () { return base_ui_theme_sizes_1.PossibleSizes; } });
const base_ui_text_text_sizes_1 = require("@teambit/base-ui.text.text-sizes");
/**
 * Paragraph component prototype. Accepts all properties of a native Paragraph element,
 * @name paragraph
 * @example
 * <Paragraph size="sm">This is some text</Paragraph>
 */
function Paragraph(_a) {
    var { className, size, element: Element } = _a, rest = __rest(_a, ["className", "size", "element"]);
    return (react_1.default.createElement(Element, Object.assign({ className: classnames_1.default(base_ui_text_text_sizes_1.textSize[size], className), "data-bit-id": "teambit.base-ui/text/paragraph" }, rest)));
}
exports.Paragraph = Paragraph;
Paragraph.defaultProps = {
    size: 'md',
    element: 'p',
};
//# sourceMappingURL=paragraph.js.map