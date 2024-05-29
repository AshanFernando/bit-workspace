"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeSwitcher = void 0;
const react_1 = __importStar(require("react"));
const theme_picker_context_1 = require("./theme-picker-context");
// (*) 'theme' is as object based on ComponentType, which may be a function ("function component")
// this confuses react's state, as it can accept functions (e.g. setState(x=>x+1) )
// setting it through a function resolves this
function ThemeSwitcher(_a) {
    var { children, themes, activeTheme, handleThemeChange, defaultTheme } = _a, props = __rest(_a, ["children", "themes", "activeTheme", "handleThemeChange", "defaultTheme"]);
    let explicitValue = typeof activeTheme === 'string' ? themes.find((x) => x.themeName === activeTheme) : activeTheme;
    const getInitialOption = () => explicitValue || (defaultTheme && themes.find((x) => x.themeName === defaultTheme)) || themes[0];
    // workaround (*)
    const [theme, setTheme] = (0, react_1.useState)(getInitialOption);
    const currentTheme = explicitValue || theme;
    const picker = {
        setTheme: (themeTarget) => {
            handleThemeChange === null || handleThemeChange === void 0 ? void 0 : handleThemeChange(themeTarget);
            // workaround (*)
            setTheme(() => themeTarget);
        },
        current: currentTheme,
        get currentIdx() {
            return this.current ? this.options.indexOf(this.current) : -1;
        },
        options: themes,
    };
    const Provider = currentTheme;
    // @ts-ignore
    const forwardProps = props;
    return (react_1.default.createElement(theme_picker_context_1.ThemePickerContext.Provider, { value: picker }, Provider ? react_1.default.createElement(Provider, Object.assign({}, forwardProps), children) : children));
}
exports.ThemeSwitcher = ThemeSwitcher;
//# sourceMappingURL=theme-switcher.js.map