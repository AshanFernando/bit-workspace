"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TogglerPreview = void 0;
const react_1 = __importDefault(require("react"));
const theme_toggler_1 = require("./theme-toggler");
const theme_switcher_1 = require("./theme-switcher");
function TogglerPreview() {
    return (react_1.default.createElement(theme_switcher_1.ThemeSwitcher, { defaultTheme: "dark", style: { padding: 8 } },
        react_1.default.createElement(theme_toggler_1.ThemeToggler, null)));
}
exports.TogglerPreview = TogglerPreview;
//# sourceMappingURL=theme-toggler.compositions.js.map