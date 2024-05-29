"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleAnchor = exports.AnchorComponentWithHeading = void 0;
const react_1 = __importDefault(require("react"));
const anchor_1 = require("./anchor");
const documenter_theme_theme_compositions_1 = require("@teambit/documenter.theme.theme-compositions");
const documenter_ui_heading_1 = require("@teambit/documenter.ui.heading");
const AnchorComponentWithHeading = () => {
    return (react_1.default.createElement(documenter_theme_theme_compositions_1.ThemeCompositions, null,
        react_1.default.createElement("div", { style: { display: 'inline-flex', alignItems: 'center' } },
            react_1.default.createElement(documenter_ui_heading_1.H1, { style: { marginRight: '10px' } }, "example"),
            react_1.default.createElement(anchor_1.Anchor, { href: "example" }))));
};
exports.AnchorComponentWithHeading = AnchorComponentWithHeading;
const SimpleAnchor = () => {
    return (react_1.default.createElement(documenter_theme_theme_compositions_1.ThemeCompositions, null,
        react_1.default.createElement(anchor_1.Anchor, { href: "example" })));
};
exports.SimpleAnchor = SimpleAnchor;
exports.SimpleAnchor.canvas = {
    width: 50,
};
//# sourceMappingURL=anchor.composition.js.map