"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestPage = exports.DarkSchema = void 0;
const react_1 = __importDefault(require("react"));
const design_themes_base_theme_1 = require("@teambit/design.themes.base-theme");
const design_themes_color_schema_1 = require("@teambit/design.themes.color-schema");
const dark_theme_1 = require("./dark-theme");
const DarkSchema = () => {
    return (react_1.default.createElement(dark_theme_1.DarkTheme, null,
        react_1.default.createElement(ShowTokens, null)));
};
exports.DarkSchema = DarkSchema;
const TestPage = () => {
    return (react_1.default.createElement(dark_theme_1.DarkTheme, null,
        react_1.default.createElement(design_themes_color_schema_1.SchemaTestPage, null)));
};
exports.TestPage = TestPage;
// need a separate component to use react context
function ShowTokens() {
    const theme = (0, design_themes_base_theme_1.useTheme)();
    const tokens = Object.entries(theme).map(([name, value]) => ({
        name,
        value,
    }));
    return react_1.default.createElement(design_themes_color_schema_1.ColorSchema, { tokens: tokens });
}
//# sourceMappingURL=dark-theme.composition.js.map