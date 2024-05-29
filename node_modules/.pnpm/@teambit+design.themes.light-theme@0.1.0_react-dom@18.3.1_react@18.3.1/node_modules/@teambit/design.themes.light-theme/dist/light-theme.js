"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightTheme = exports.lightThemeValues = void 0;
const react_1 = __importDefault(require("react"));
const design_themes_base_theme_1 = require("@teambit/design.themes.base-theme");
const light_theme_icon_1 = require("./light-theme.icon");
exports.lightThemeValues = design_themes_base_theme_1.baseThemeDefaults;
function LightTheme(props) {
    return react_1.default.createElement(design_themes_base_theme_1.BaseTheme, Object.assign({}, props));
}
exports.LightTheme = LightTheme;
// theme metadata
LightTheme.Icon = light_theme_icon_1.LightThemeIcon;
LightTheme.themeName = 'light';
//# sourceMappingURL=light-theme.js.map