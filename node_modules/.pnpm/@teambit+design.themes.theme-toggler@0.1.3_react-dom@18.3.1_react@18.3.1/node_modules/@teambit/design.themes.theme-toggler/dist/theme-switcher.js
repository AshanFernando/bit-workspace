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
exports.ThemeSwitcher = void 0;
const react_1 = __importDefault(require("react"));
const base_react_themes_theme_switcher_1 = require("@teambit/base-react.themes.theme-switcher");
const default_themes_1 = require("./default-themes");
function ThemeSwitcher(_a) {
    var { themes = default_themes_1.LightAndDarkThemes } = _a, props = __rest(_a, ["themes"]);
    return react_1.default.createElement(base_react_themes_theme_switcher_1.ThemeSwitcher, Object.assign({ themes: themes }, props));
}
exports.ThemeSwitcher = ThemeSwitcher;
//# sourceMappingURL=theme-switcher.js.map