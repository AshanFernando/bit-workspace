"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const paragraph_composition_1 = require("./paragraph.composition");
it('should render p element', () => {
    const { getByText } = react_2.render(react_1.default.createElement(paragraph_composition_1.Pelement, null));
    const rendered = getByText('p element');
    expect(rendered).toBeInstanceOf(HTMLElement);
});
it('should render p element with different size', () => {
    const { getByText } = react_2.render(react_1.default.createElement(paragraph_composition_1.PelementWithDifferentSize, null));
    const rendered = getByText('p element with xl size');
    expect(rendered.className).toContain('xl');
    expect(rendered).toBeInstanceOf(HTMLElement);
});
it('should render div element', () => {
    const { getByText } = react_2.render(react_1.default.createElement(paragraph_composition_1.DivElement, null));
    const rendered = getByText('div element');
    expect(rendered).toBeInstanceOf(HTMLElement);
});
it('should render span element', () => {
    const { getByText } = react_2.render(react_1.default.createElement(paragraph_composition_1.SpanElement, null));
    const rendered = getByText('span element');
    expect(rendered).toBeInstanceOf(HTMLElement);
});
//# sourceMappingURL=paragraph.spec.js.map