"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const light_theme_composition_1 = require("./light-theme.composition");
it('should render with the correct text', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(light_theme_composition_1.LightSchema, null));
    const rendered = getByText('primaryColor');
    expect(rendered).toBeTruthy();
});
//# sourceMappingURL=light-theme.spec.js.map