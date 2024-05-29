"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsTheme = void 0;
// import 'reset-css'; // do not include resets, we want compositions with native behavior
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
// import { ThemeContext } from '@teambit/documenter.theme.theme-context';
const design_themes_theme_toggler_1 = require("@teambit/design.themes.theme-toggler");
const design_theme_icons_font_1 = require("@teambit/design.theme.icons-font");
const docs_app_module_scss_1 = __importDefault(require("./docs-app.module.scss"));
function DocsTheme({ children }) {
    const hash = window.location.hash;
    const [, hashQuery] = hash && hash.split('?');
    const params = new URLSearchParams(hashQuery);
    const theme = params.get('theme') || 'light';
    return (react_1.default.createElement(design_themes_theme_toggler_1.ThemeSwitcher, { defaultTheme: theme },
        react_1.default.createElement(design_theme_icons_font_1.IconFont, { query: "q76y7n" }),
        react_1.default.createElement("div", { className: (0, classnames_1.default)(docs_app_module_scss_1.default.docsMainBlock) }, children)));
}
exports.DocsTheme = DocsTheme;
//# sourceMappingURL=docs-theme.js.map