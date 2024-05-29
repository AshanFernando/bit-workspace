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
exports.computeCssVars = exports.createThemeProvider = void 0;
const react_1 = __importStar(require("react"));
function createThemeProvider(ThemeContext, options) {
    return (_a) => {
        var { children, overrides, style } = _a, rest = __rest(_a, ["children", "overrides", "style"]);
        const theme = (0, react_1.useMemo)(() => (Object.assign(Object.assign({}, options.theme), overrides)), [options.theme, overrides]);
        if (options.withoutCssVars)
            return react_1.default.createElement(ThemeContext.Provider, { value: theme }, children);
        const cssVars = computeCssVars(theme, options.prefix);
        return (react_1.default.createElement("div", Object.assign({ style: Object.assign(Object.assign({}, cssVars), style) }, rest),
            react_1.default.createElement(ThemeContext.Provider, { value: theme }, children)));
    };
}
exports.createThemeProvider = createThemeProvider;
function computeCssVars(theme, prefix) {
    return Object.entries(theme)
        .map(([key, val]) => {
        const varName = key.replace(/[A-Z]/g, '-$&').toLowerCase();
        const varKey = prefix ? `--${prefix}-${varName}` : `--${varName}`;
        return [varKey, val];
    })
        .reduce((acc, [key, val]) => {
        acc[key] = val;
        return acc;
    }, {});
}
exports.computeCssVars = computeCssVars;
//# sourceMappingURL=create-theme-provider.js.map