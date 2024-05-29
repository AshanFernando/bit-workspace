"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkTheme = void 0;
const react_1 = __importDefault(require("react"));
const design_themes_base_theme_1 = require("@teambit/design.themes.base-theme");
const dark_theme_values_1 = require("./dark-theme.values");
const dark_theme_icon_1 = require("./dark-theme.icon");
function DarkTheme(props) {
    return react_1.default.createElement(design_themes_base_theme_1.BaseTheme, Object.assign({}, props, { overrides: dark_theme_values_1.darkThemeValues }));
}
exports.DarkTheme = DarkTheme;
// theme metadata
DarkTheme.Icon = dark_theme_icon_1.DarkThemeIcon;
DarkTheme.themeName = 'dark';
//# sourceMappingURL=dark-theme.js.map