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
exports.InlineCode = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const inline_code_module_scss_1 = __importDefault(require("./inline-code.module.scss"));
/**
 * A <p> element with text highlighting
 */
function InlineCode(_a) {
    var { children, highlight, className } = _a, rest = __rest(_a, ["children", "highlight", "className"]);
    return (react_1.default.createElement("code", Object.assign({}, rest, { className: (0, classnames_1.default)(inline_code_module_scss_1.default.inlineCode, highlight && inline_code_module_scss_1.default.highlight, className) }), children));
}
exports.InlineCode = InlineCode;
//# sourceMappingURL=inline-code.js.map