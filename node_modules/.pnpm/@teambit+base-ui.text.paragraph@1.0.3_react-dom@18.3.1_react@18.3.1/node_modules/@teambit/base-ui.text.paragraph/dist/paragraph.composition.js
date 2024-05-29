"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpanElement = exports.DivElement = exports.PelementWithDifferentSize = exports.Pelement = void 0;
const react_1 = __importDefault(require("react"));
const base_ui_theme_theme_provider_1 = require("@teambit/base-ui.theme.theme-provider");
const base_ui_theme_sizes_1 = require("@teambit/base-ui.theme.sizes");
const paragraph_1 = require("./paragraph");
const Pelement = () => (react_1.default.createElement(base_ui_theme_theme_provider_1.Theme, null,
    react_1.default.createElement(paragraph_1.Paragraph, { element: "p" }, "p element")));
exports.Pelement = Pelement;
const PelementWithDifferentSize = () => (react_1.default.createElement(base_ui_theme_theme_provider_1.Theme, null,
    react_1.default.createElement(paragraph_1.Paragraph, { size: base_ui_theme_sizes_1.PossibleSizes.xl }, "p element with xl size")));
exports.PelementWithDifferentSize = PelementWithDifferentSize;
const DivElement = () => (react_1.default.createElement(base_ui_theme_theme_provider_1.Theme, null,
    react_1.default.createElement(paragraph_1.Paragraph, { element: "div" }, "div element")));
exports.DivElement = DivElement;
const SpanElement = () => (react_1.default.createElement(base_ui_theme_theme_provider_1.Theme, null,
    react_1.default.createElement(paragraph_1.Paragraph, { element: "span" }, "span element")));
exports.SpanElement = SpanElement;
//# sourceMappingURL=paragraph.composition.js.map