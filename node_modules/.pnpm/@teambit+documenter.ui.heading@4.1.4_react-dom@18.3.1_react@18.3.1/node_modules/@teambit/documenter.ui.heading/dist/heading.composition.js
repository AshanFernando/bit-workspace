"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadingXxs = exports.HeadingXs = exports.HeadingSm = exports.HeadingMd = exports.HeadingLg = exports.HeadingXl = void 0;
const react_1 = __importDefault(require("react"));
const documenter_theme_theme_compositions_1 = require("@teambit/documenter.theme.theme-compositions");
const heading_1 = require("./heading");
const HeadingXl = () => {
    return (react_1.default.createElement(documenter_theme_theme_compositions_1.ThemeCompositions, null,
        react_1.default.createElement(heading_1.H1, { style: { whiteSpace: 'nowrap' } }, "main header")));
};
exports.HeadingXl = HeadingXl;
const HeadingLg = () => (react_1.default.createElement(documenter_theme_theme_compositions_1.ThemeCompositions, null,
    react_1.default.createElement(heading_1.H2, { style: { whiteSpace: 'nowrap' } }, "main header")));
exports.HeadingLg = HeadingLg;
const HeadingMd = () => (react_1.default.createElement(documenter_theme_theme_compositions_1.ThemeCompositions, null,
    react_1.default.createElement(heading_1.H3, { style: { whiteSpace: 'nowrap' } }, "main header")));
exports.HeadingMd = HeadingMd;
const HeadingSm = () => (react_1.default.createElement(documenter_theme_theme_compositions_1.ThemeCompositions, null,
    react_1.default.createElement(heading_1.H4, { style: { whiteSpace: 'nowrap' } }, "main header")));
exports.HeadingSm = HeadingSm;
const HeadingXs = () => (react_1.default.createElement(documenter_theme_theme_compositions_1.ThemeCompositions, null,
    react_1.default.createElement(heading_1.H5, { style: { whiteSpace: 'nowrap' } }, "main header")));
exports.HeadingXs = HeadingXs;
const HeadingXxs = () => (react_1.default.createElement(documenter_theme_theme_compositions_1.ThemeCompositions, null,
    react_1.default.createElement(heading_1.H6, { style: { whiteSpace: 'nowrap' } }, "main header")));
exports.HeadingXxs = HeadingXxs;
//# sourceMappingURL=heading.composition.js.map