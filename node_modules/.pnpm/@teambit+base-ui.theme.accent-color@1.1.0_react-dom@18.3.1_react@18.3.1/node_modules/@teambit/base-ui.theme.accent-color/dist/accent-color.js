"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorPalette = void 0;
const accent_color_module_scss_1 = __importDefault(require("./accent-color.module.scss"));
/**
 * Sets the accent color variables for the specific use case.<br/>
 * Effects the color of many elements, such as `<ThemedText>` and `<Button>`.
 * @name colorPalette
 */
exports.colorPalette = {
    primary: accent_color_module_scss_1.default.primary,
    // primaryLight: colorStyles.muted,
    complementary: accent_color_module_scss_1.default.complementary,
    neutral: accent_color_module_scss_1.default.neutral,
    neutralHeavy: accent_color_module_scss_1.default.emphasized,
    error: accent_color_module_scss_1.default.impulsive,
    warning: accent_color_module_scss_1.default.hungry,
    success: accent_color_module_scss_1.default.success,
    // intents:
    action: accent_color_module_scss_1.default.impulsive,
    consider: accent_color_module_scss_1.default.hungry,
    continue: accent_color_module_scss_1.default.success,
    process: accent_color_module_scss_1.default.process,
};
//# sourceMappingURL=accent-color.js.map