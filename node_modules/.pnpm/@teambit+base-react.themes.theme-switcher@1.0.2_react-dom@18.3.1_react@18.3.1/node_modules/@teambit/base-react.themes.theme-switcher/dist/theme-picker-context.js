"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNextTheme = exports.useThemeByName = exports.useThemePicker = exports.ThemePickerContext = void 0;
const react_1 = require("react");
exports.ThemePickerContext = (0, react_1.createContext)(undefined);
function useThemePicker() {
    return (0, react_1.useContext)(exports.ThemePickerContext);
}
exports.useThemePicker = useThemePicker;
function useThemeByName(themeName) {
    const themes = useThemePicker();
    if (!themeName || !themes)
        return undefined;
    return themes.options.find((theme) => theme.themeName === themeName);
}
exports.useThemeByName = useThemeByName;
function useNextTheme() {
    const themes = useThemePicker();
    return (0, react_1.useCallback)(() => {
        if (!themes)
            return;
        const { options, setTheme, currentIdx } = themes;
        const nextIdx = (currentIdx + 1) % options.length;
        const next = options[nextIdx];
        setTheme(next);
    }, [themes]);
}
exports.useNextTheme = useNextTheme;
//# sourceMappingURL=theme-picker-context.js.map