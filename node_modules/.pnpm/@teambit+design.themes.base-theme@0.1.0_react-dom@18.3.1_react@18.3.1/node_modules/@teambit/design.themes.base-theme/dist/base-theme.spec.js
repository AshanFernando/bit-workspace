"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const base_theme_composition_1 = require("./base-theme.composition");
const base_theme_1 = require("./base-theme");
it('should render with the correct text', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(base_theme_composition_1.ColorScheme, null));
    const rendered = getByText('primaryColor');
    expect(rendered).toBeTruthy();
});
it('should forward overrides', () => {
    const overrideValues = { primaryColor: 'override-value' };
    const { getByText } = (0, react_2.render)(react_1.default.createElement(base_theme_1.BaseTheme, { overrides: overrideValues },
        react_1.default.createElement(GetPrimaryColor, null)));
    const rendered = getByText(`primaryColor: ${overrideValues.primaryColor}`);
    expect(rendered).toBeTruthy();
});
// make sure can pass down styles, as it is critical for some consumers
it('should forward style and attribute', () => {
    const { getByTestId } = (0, react_2.render)(react_1.default.createElement(base_theme_1.BaseTheme, { "data-testid": "target", style: { border: '1px solid black' }, className: "some-class" }, "base theme"));
    const rendered = getByTestId('target');
    expect(rendered).toHaveClass('some-class');
    expect(rendered).toHaveStyle({ border: '1px solid black' });
});
function GetPrimaryColor() {
    const theme = (0, base_theme_1.useTheme)();
    return react_1.default.createElement("div", null,
        "primaryColor: ",
        theme.primaryColor);
}
//# sourceMappingURL=base-theme.spec.js.map