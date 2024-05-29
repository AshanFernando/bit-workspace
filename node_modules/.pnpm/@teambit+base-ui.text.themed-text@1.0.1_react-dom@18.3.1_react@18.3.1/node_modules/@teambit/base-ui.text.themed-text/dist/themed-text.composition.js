"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsingThemedTextClassName = exports.ThemedTextExample = void 0;
const react_1 = __importDefault(require("react"));
const base_ui_theme_theme_provider_1 = require("@teambit/base-ui.theme.theme-provider");
const themed_text_1 = require("./themed-text");
const ThemedTextExample = () => (react_1.default.createElement(base_ui_theme_theme_provider_1.Theme, null,
    react_1.default.createElement(themed_text_1.ThemedText, null, "text")));
exports.ThemedTextExample = ThemedTextExample;
const UsingThemedTextClassName = () => (react_1.default.createElement(base_ui_theme_theme_provider_1.Theme, null,
    react_1.default.createElement("span", { className: themed_text_1.themedText }, "text")));
exports.UsingThemedTextClassName = UsingThemedTextClassName;
//# sourceMappingURL=themed-text.composition.js.map