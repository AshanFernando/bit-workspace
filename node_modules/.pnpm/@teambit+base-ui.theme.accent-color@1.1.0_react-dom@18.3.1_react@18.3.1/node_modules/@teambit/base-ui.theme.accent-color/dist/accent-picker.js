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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemePicker = exports.ThemeExample = exports.AccentPicker = void 0;
const react_1 = __importStar(require("react"));
const accent_color_1 = require("./accent-color");
const accent_picker_module_scss_1 = __importDefault(require("./accent-picker.module.scss"));
function AccentPicker() {
    const [themeName, setTheme] = react_1.useState('primary');
    const actualTheme = accent_color_1.colorPalette[themeName];
    return (react_1.default.createElement("div", { style: { display: 'flex' } },
        react_1.default.createElement(ThemeExample, { className: actualTheme }),
        react_1.default.createElement(ThemePicker, { onChange: (theme) => setTheme(theme), themes: Object.keys(accent_color_1.colorPalette) })));
}
exports.AccentPicker = AccentPicker;
function ThemeExample({ className }) {
    return (react_1.default.createElement("div", { className: className + ' ' + accent_picker_module_scss_1.default.themeExample },
        react_1.default.createElement("div", { className: accent_picker_module_scss_1.default.bg },
            react_1.default.createElement("div", { className: accent_picker_module_scss_1.default.accentText }, "accent text"),
            react_1.default.createElement("div", null, "some regular text"),
            react_1.default.createElement("button", { className: accent_picker_module_scss_1.default.btn }, "accent colored box")),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", { className: accent_picker_module_scss_1.default.shadowed }, "shadow")));
}
exports.ThemeExample = ThemeExample;
function ThemePicker({ onChange, themes }) {
    return (react_1.default.createElement("div", null,
        "\u00A0Accent Palette:",
        themes.map((key) => (react_1.default.createElement("div", null,
            react_1.default.createElement("label", { htmlFor: key, onChange: () => onChange(key) },
                react_1.default.createElement("input", { key: key, type: "radio", id: key, value: key, name: "themes" }),
                key))))));
}
exports.ThemePicker = ThemePicker;
//# sourceMappingURL=accent-picker.js.map