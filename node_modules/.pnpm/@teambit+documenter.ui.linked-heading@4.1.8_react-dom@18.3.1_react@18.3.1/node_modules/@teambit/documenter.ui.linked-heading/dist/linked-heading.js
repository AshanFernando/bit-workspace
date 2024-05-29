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
exports.LinkedHeading = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const documenter_ui_heading_1 = require("@teambit/documenter.ui.heading");
const documenter_ui_anchor_1 = require("@teambit/documenter.ui.anchor");
const linked_heading_module_scss_1 = __importDefault(require("./linked-heading.module.scss"));
/**
 * section heading with anchor link
 */
function LinkedHeading(_a) {
    var { children, link, size, element = 'h3', className } = _a, rest = __rest(_a, ["children", "link", "size", "element", "className"]);
    const Element = headerElement(element);
    return (react_1.default.createElement("div", Object.assign({ className: (0, classnames_1.default)(linked_heading_module_scss_1.default.linkedHeading, className) }, rest),
        react_1.default.createElement(Element, { className: linked_heading_module_scss_1.default.heading, size: size, id: link }, children),
        link && react_1.default.createElement(documenter_ui_anchor_1.Anchor, { className: linked_heading_module_scss_1.default.anchor, href: link })));
}
exports.LinkedHeading = LinkedHeading;
const headerElement = (element) => {
    switch (element) {
        case 'h1':
            return documenter_ui_heading_1.H1;
        case 'h2':
            return documenter_ui_heading_1.H2;
        case 'h3':
            return documenter_ui_heading_1.H3;
        case 'h4':
            return documenter_ui_heading_1.H4;
        case 'h5':
            return documenter_ui_heading_1.H5;
        case 'h6':
            return documenter_ui_heading_1.H6;
        default:
            return documenter_ui_heading_1.H3;
    }
};
//# sourceMappingURL=linked-heading.js.map