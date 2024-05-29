"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTheme = void 0;
const react_1 = require("react");
const create_theme_provider_1 = require("./create-theme-provider");
/**
 * create a new theme.
 */
function createTheme({ theme, prefix, withoutCssVars }) {
    const ThemeContext = (0, react_1.createContext)(theme);
    const ThemeProvider = (0, create_theme_provider_1.createThemeProvider)(ThemeContext, {
        theme,
        prefix,
        withoutCssVars,
    });
    const useTheme = () => {
        return (0, react_1.useContext)(ThemeContext);
    };
    return {
        ThemeProvider,
        useTheme,
    };
}
exports.createTheme = createTheme;
//# sourceMappingURL=create-theme.js.map