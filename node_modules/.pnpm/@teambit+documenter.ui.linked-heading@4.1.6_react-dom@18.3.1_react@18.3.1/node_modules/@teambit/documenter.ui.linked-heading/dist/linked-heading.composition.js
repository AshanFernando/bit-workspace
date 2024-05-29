"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Small = exports.Default = exports.Large = void 0;
const react_1 = __importDefault(require("react"));
const linked_heading_1 = require("./linked-heading");
const documenter_theme_theme_compositions_1 = require("@teambit/documenter.theme.theme-compositions");
const Large = () => {
    return (react_1.default.createElement(documenter_theme_theme_compositions_1.ThemeCompositions, null,
        react_1.default.createElement(linked_heading_1.LinkedHeading, { element: "h1", link: "link" }, "large h1")));
};
exports.Large = Large;
const Default = () => {
    return (react_1.default.createElement(documenter_theme_theme_compositions_1.ThemeCompositions, null,
        react_1.default.createElement(linked_heading_1.LinkedHeading, { link: "link" }, "default")));
};
exports.Default = Default;
const Small = () => {
    return (react_1.default.createElement(documenter_theme_theme_compositions_1.ThemeCompositions, null,
        react_1.default.createElement(linked_heading_1.LinkedHeading, { size: "sm", link: "link" }, "small")));
};
exports.Small = Small;
//# sourceMappingURL=linked-heading.composition.js.map