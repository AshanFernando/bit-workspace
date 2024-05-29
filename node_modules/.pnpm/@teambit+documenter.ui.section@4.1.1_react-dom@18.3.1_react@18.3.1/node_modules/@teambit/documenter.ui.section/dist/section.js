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
exports.Section = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const section_module_scss_1 = __importDefault(require("./section.module.scss"));
/**
 *
 * A wrapper component that separates the page into semantic sections.
 */
function Section(_a) {
    var { className, children } = _a, rest = __rest(_a, ["className", "children"]);
    return react_1.default.createElement("div", Object.assign({ className: classnames_1.default(section_module_scss_1.default.spacer, section_module_scss_1.default.sectionMargin, className) }, rest), children);
}
exports.Section = Section;
//# sourceMappingURL=section.js.map