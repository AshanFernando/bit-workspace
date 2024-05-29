"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const theme_switcher_composition_1 = require("./theme-switcher.composition");
it('should render with the correct text', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(theme_switcher_composition_1.BasicThemeSwitcher, null));
    expect(getByText('hello world!')).toBeInTheDocument();
});
it('should switch themes using the toggler context', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(theme_switcher_composition_1.BasicThemeSwitcher, null));
    expect(getByText('themeA')).toBeInTheDocument();
    react_2.fireEvent.click(getByText('click here apply next theme'));
    expect(getByText('themeB')).toBeInTheDocument();
});
it('should keep same theme, even when switching using context, when controlled', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(theme_switcher_composition_1.BasicThemeSwitcher, { activeTheme: "theme-a" }));
    expect(getByText('themeA')).toBeInTheDocument();
    react_2.fireEvent.click(getByText('click here apply next theme'));
    expect(getByText('themeA')).toBeInTheDocument();
});
it('should render theme when set explicitly', () => {
    const { getByText, rerender } = (0, react_2.render)(react_1.default.createElement(theme_switcher_composition_1.BasicThemeSwitcher, { activeTheme: 'theme-b' }));
    const rendered = getByText('themeB');
    expect(rendered).toBeTruthy();
    rerender(react_1.default.createElement(theme_switcher_composition_1.BasicThemeSwitcher, { activeTheme: 'theme-a' }));
    const renderedSecond = getByText('themeA');
    expect(renderedSecond).toBeTruthy();
});
it('should pick initial theme when uncontrolled', () => {
    const { getByText, rerender } = (0, react_2.render)(react_1.default.createElement(theme_switcher_composition_1.BasicThemeSwitcher, { defaultTheme: 'theme-b' }));
    const rendered = getByText('themeB');
    expect(rendered).toBeTruthy();
    rerender(react_1.default.createElement(theme_switcher_composition_1.BasicThemeSwitcher, { activeTheme: 'theme-a' }));
    const renderedSecond = getByText('themeA');
    expect(renderedSecond).toBeTruthy();
});
//# sourceMappingURL=theme-switcher.spec.js.map