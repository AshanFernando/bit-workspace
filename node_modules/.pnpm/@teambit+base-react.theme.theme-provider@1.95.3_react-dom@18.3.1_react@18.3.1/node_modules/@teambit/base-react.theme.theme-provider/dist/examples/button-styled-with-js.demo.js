"use strict";
/* THIS EXAMPLE DEMONSTRATES HOW TO STYLE A COMPONENT WITH JS TO MAKE IT THEMEABLE */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const default_theme_demo_1 = require("./default-theme.demo");
/* styles this button using the JS variables made available by the theme provider */
const Button = () => {
    /* gets the theme's design token values using its hook */
    const { colorBackground, colorText } = default_theme_demo_1.Theme.useTheme();
    /* uses the design token values */
    const jsVars = {
        backgroundColor: colorBackground,
        color: colorText,
    };
    return react_1.default.createElement("button", { style: jsVars }, "A Button Styled using JS Vars");
};
exports.Button = Button;
//# sourceMappingURL=button-styled-with-js.demo.js.map