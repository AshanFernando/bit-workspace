"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = exports.BaseTheme = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const base_react_theme_theme_provider_1 = require("@teambit/base-react.theme.theme-provider");
// TODO: remove this after replacing icon fonts with components and deprecate this.
const design_theme_icons_font_1 = require("@teambit/design.theme.icons-font");
const theme_default_values_1 = require("./theme-default.values");
const legacy_tokens_1 = require("./legacy-tokens");
const circular_font_1 = require("./circular-font");
const base_theme_module_scss_1 = __importDefault(require("./base-theme.module.scss"));
const ICON_MOON_VERSION = 'mxd7i0';
const { useTheme, ThemeProvider } = (0, base_react_theme_theme_provider_1.createTheme)({
    theme: theme_default_values_1.baseThemeDefaults,
});
exports.useTheme = useTheme;
function BaseTheme(_a) {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (react_1.default.createElement(ThemeProvider, Object.assign({}, props, { className: (0, classnames_1.default)(circular_font_1.circularFont, base_theme_module_scss_1.default.theme, className) }),
        react_1.default.createElement("link", { href: "https://fonts.googleapis.com/css?family=Roboto+Mono", rel: "stylesheet" }),
        react_1.default.createElement(design_theme_icons_font_1.IconFont, { query: ICON_MOON_VERSION }),
        react_1.default.createElement(LegacyThemeProvider, null, children)));
}
exports.BaseTheme = BaseTheme;
function LegacyThemeProvider({ children }) {
    const theme = useTheme();
    return react_1.default.createElement("div", { style: (0, legacy_tokens_1.getLegacyTokens)(theme) }, children);
}
//# sourceMappingURL=base-theme.js.map