"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const themed_text_composition_1 = require("./themed-text.composition");
it('should render correctly', () => {
    const { getByText } = react_2.render(react_1.default.createElement(themed_text_composition_1.ThemedTextExample, null));
    const rendered = getByText('text');
    expect(rendered).toBeInstanceOf(HTMLElement);
});
it('should render correctly using class name', () => {
    const { getByText } = react_2.render(react_1.default.createElement(themed_text_composition_1.UsingThemedTextClassName, null));
    const rendered = getByText('text');
    expect(rendered).toBeInstanceOf(HTMLElement);
});
//# sourceMappingURL=themed-text.spec.js.map