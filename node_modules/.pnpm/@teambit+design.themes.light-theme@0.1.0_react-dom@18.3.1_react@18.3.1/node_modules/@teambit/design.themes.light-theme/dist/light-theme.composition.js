"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestPage = exports.LightSchema = void 0;
const react_1 = __importDefault(require("react"));
const design_themes_color_schema_1 = require("@teambit/design.themes.color-schema");
const light_theme_1 = require("./light-theme");
const design_themes_base_theme_1 = require("@teambit/design.themes.base-theme");
const LightSchema = () => {
    return (react_1.default.createElement(light_theme_1.LightTheme, null,
        react_1.default.createElement(ShowTokens, null)));
};
exports.LightSchema = LightSchema;
const TestPage = () => {
    return (react_1.default.createElement(light_theme_1.LightTheme, null,
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
//# sourceMappingURL=light-theme.composition.js.map