"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicThemeSwitcher = void 0;
const react_1 = __importDefault(require("react"));
const theme_toggler_1 = require("./theme-toggler");
const theme_switcher_1 = require("./theme-switcher");
const BasicThemeSwitcher = (props) => {
    return (react_1.default.createElement(theme_switcher_1.ThemeSwitcher, Object.assign({ themes: [ThemeA, ThemeB] }, props),
        react_1.default.createElement("div", null, "hello world!"),
        react_1.default.createElement(theme_toggler_1.ThemeToggler, null, "click here apply next theme")));
};
exports.BasicThemeSwitcher = BasicThemeSwitcher;
function ThemeA({ children }) {
    return (react_1.default.createElement("div", { style: { background: '#fff3b3', padding: 8 } },
        react_1.default.createElement("div", null, "themeA"),
        children));
}
ThemeA.themeName = 'theme-a';
function ThemeB({ children }) {
    return (react_1.default.createElement("div", { style: { background: '#B3BFFF', padding: 8 } },
        react_1.default.createElement("div", null, "themeB"),
        children));
}
ThemeB.themeName = 'theme-b';
//# sourceMappingURL=theme-switcher.composition.js.map