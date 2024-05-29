"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.H6Heading = exports.H5Heading = exports.H4Heading = exports.H3Heading = exports.H2Heading = exports.H1DefaultHeading = void 0;
const react_1 = __importDefault(require("react"));
const base_ui_theme_theme_provider_1 = require("@teambit/base-ui.theme.theme-provider");
const heading_1 = require("./heading");
const H1DefaultHeading = () => (react_1.default.createElement(base_ui_theme_theme_provider_1.Theme, null,
    react_1.default.createElement(heading_1.Heading, null, "H1 Heading")));
exports.H1DefaultHeading = H1DefaultHeading;
const H2Heading = () => (react_1.default.createElement(base_ui_theme_theme_provider_1.Theme, null,
    react_1.default.createElement(heading_1.Heading, { element: "h2" }, "H2 Heading")));
exports.H2Heading = H2Heading;
const H3Heading = () => (react_1.default.createElement(base_ui_theme_theme_provider_1.Theme, null,
    react_1.default.createElement(heading_1.Heading, { element: "h3" }, "H3 Heading")));
exports.H3Heading = H3Heading;
const H4Heading = () => (react_1.default.createElement(base_ui_theme_theme_provider_1.Theme, null,
    react_1.default.createElement(heading_1.Heading, { element: "h4" }, "H4 Heading")));
exports.H4Heading = H4Heading;
const H5Heading = () => (react_1.default.createElement(base_ui_theme_theme_provider_1.Theme, null,
    react_1.default.createElement(heading_1.Heading, { element: "h5" }, "H5 Heading")));
exports.H5Heading = H5Heading;
const H6Heading = () => (react_1.default.createElement(base_ui_theme_theme_provider_1.Theme, null,
    react_1.default.createElement(heading_1.Heading, { element: "h6" }, "H6 Heading")));
exports.H6Heading = H6Heading;
//# sourceMappingURL=heading.composition.js.map