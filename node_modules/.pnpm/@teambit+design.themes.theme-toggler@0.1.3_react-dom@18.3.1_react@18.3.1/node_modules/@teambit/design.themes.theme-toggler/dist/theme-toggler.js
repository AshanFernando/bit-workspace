"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeToggler = void 0;
const react_1 = __importDefault(require("react"));
const base_react_themes_theme_switcher_1 = require("@teambit/base-react.themes.theme-switcher");
const theme_toggler_module_scss_1 = __importDefault(require("./theme-toggler.module.scss"));
function ThemeToggler() {
    const themePicker = (0, base_react_themes_theme_switcher_1.useThemePicker)();
    const setNextTheme = (0, base_react_themes_theme_switcher_1.useNextTheme)();
    if (!themePicker)
        return null;
    const currentTheme = themePicker.current;
    if (!currentTheme)
        return null;
    const { Icon, displayName } = currentTheme;
    if (!Icon)
        return (react_1.default.createElement("div", { className: theme_toggler_module_scss_1.default.toggler, onClick: setNextTheme }, displayName));
    return react_1.default.createElement(Icon, { className: theme_toggler_module_scss_1.default.toggler, onClick: setNextTheme });
}
exports.ThemeToggler = ThemeToggler;
//# sourceMappingURL=theme-toggler.js.map