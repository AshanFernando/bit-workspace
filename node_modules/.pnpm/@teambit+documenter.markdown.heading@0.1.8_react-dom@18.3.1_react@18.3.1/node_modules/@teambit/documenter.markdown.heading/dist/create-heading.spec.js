"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const create_heading_composition_1 = require("./create-heading.composition");
it('should render H1 size correctly', () => {
    const { getByTestId } = (0, react_2.render)(react_1.default.createElement(create_heading_composition_1.CreateH1Example, null));
    const rendered = getByTestId('test-create-heading');
    expect(rendered).toBeInTheDocument();
});
it('should render H2 size correctly', () => {
    const { getByTestId } = (0, react_2.render)(react_1.default.createElement(create_heading_composition_1.CreateH2Example, null));
    const rendered = getByTestId('test-create-heading');
    expect(rendered).toBeInTheDocument();
});
//# sourceMappingURL=create-heading.spec.js.map