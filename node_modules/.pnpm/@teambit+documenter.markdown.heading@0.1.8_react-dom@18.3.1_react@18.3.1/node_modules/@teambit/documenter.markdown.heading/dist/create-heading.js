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
exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.createHeading = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const documenter_ui_linked_heading_1 = require("@teambit/documenter.ui.linked-heading");
const create_heading_module_scss_1 = __importDefault(require("./create-heading.module.scss"));
function createHeading(size, element) {
    return function Heading(_a) {
        var { children, className } = _a, rest = __rest(_a, ["children", "className"]);
        const isMainHeading = size === 'lg' || size === 'md';
        return (react_1.default.createElement(documenter_ui_linked_heading_1.LinkedHeading, Object.assign({}, rest, { className: (0, classnames_1.default)(className, create_heading_module_scss_1.default.mdxLinkedHeading, isMainHeading && create_heading_module_scss_1.default.mainHeadingStyles), size: size, element: element }), children));
    };
}
exports.createHeading = createHeading;
exports.h1 = createHeading('lg', 'h1');
exports.h2 = createHeading('md', 'h2');
exports.h3 = createHeading('sm', 'h3');
exports.h4 = createHeading('xs', 'h4');
exports.h5 = createHeading('xxs', 'h5');
exports.h6 = createHeading('xxs', 'h6');
//# sourceMappingURL=create-heading.js.map