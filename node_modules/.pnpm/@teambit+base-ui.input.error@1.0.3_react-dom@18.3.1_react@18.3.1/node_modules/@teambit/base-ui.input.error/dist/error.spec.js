"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const error_composition_1 = require("./error.composition");
describe('Error Component', () => {
    it('should render correctly with children', () => {
        const { getByText } = react_2.render(react_1.default.createElement(error_composition_1.ErrorMessage, null));
        const rendered = getByText('error message!');
        expect(rendered).toBeInstanceOf(HTMLElement);
    });
});
//# sourceMappingURL=error.spec.js.map