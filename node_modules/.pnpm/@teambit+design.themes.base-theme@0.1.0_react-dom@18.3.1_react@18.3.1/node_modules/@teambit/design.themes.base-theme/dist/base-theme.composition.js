"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorScheme = void 0;
const react_1 = __importDefault(require("react"));
const base_theme_1 = require("./base-theme");
const ColorScheme = () => {
    return (react_1.default.createElement(base_theme_1.BaseTheme, null,
        react_1.default.createElement(ListTokens, null)));
};
exports.ColorScheme = ColorScheme;
function ListTokens() {
    const theme = (0, base_theme_1.useTheme)();
    return (react_1.default.createElement("div", { style: { width: 'fit-content', display: 'grid', gridTemplateColumns: 'auto auto auto', gap: '8px 4px' } }, Object.entries(theme).map(([key, value]) => (react_1.default.createElement(ColorBox, { key: key, colorName: key, value: value })))));
}
const colorBoxStyle = {
    width: 20,
    height: 20,
    borderRadius: 4,
    border: '1px solid black',
};
function ColorBox({ colorName, value }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: Object.assign(Object.assign({}, colorBoxStyle), { background: value }) }),
        react_1.default.createElement("div", null, colorName),
        react_1.default.createElement("div", null,
            react_1.default.createElement("code", null, value))));
}
//# sourceMappingURL=base-theme.composition.js.map