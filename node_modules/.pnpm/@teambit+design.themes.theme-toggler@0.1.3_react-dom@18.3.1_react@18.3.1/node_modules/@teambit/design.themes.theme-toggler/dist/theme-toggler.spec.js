"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const theme_switcher_1 = require("./theme-switcher");
const theme_toggler_1 = require("./theme-toggler");
it('should pick the first theme by default', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(theme_switcher_1.ThemeSwitcher, { themes: [Theme01, Theme02] }));
    const rendered = getByText('theme 01');
    expect(rendered).toBeTruthy();
});
it('should pick the relevant theme when setting defaultTheme ', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(theme_switcher_1.ThemeSwitcher, { themes: [Theme01, Theme02], defaultTheme: "theme02" }));
    const rendered = getByText('theme 02');
    expect(rendered).toBeTruthy();
});
it('should show the icon of the relevant theme', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(theme_switcher_1.ThemeSwitcher, { themes: [Theme01, Theme02], defaultTheme: "theme02" },
        react_1.default.createElement(theme_toggler_1.ThemeToggler, null)));
    const rendered = getByText('t02');
    expect(rendered).toBeTruthy();
});
function Theme01({ children }) {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("span", null, "theme 01"),
        children));
}
Theme01.themeName = 'theme01';
Theme01.Icon = (props) => react_1.default.createElement("span", Object.assign({}, props), "t01");
function Theme02({ children }) {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("span", null, "theme 02"),
        children));
}
Theme02.themeName = 'theme02';
Theme02.Icon = (props) => react_1.default.createElement("span", Object.assign({}, props), "t02");
//# sourceMappingURL=theme-toggler.spec.js.map