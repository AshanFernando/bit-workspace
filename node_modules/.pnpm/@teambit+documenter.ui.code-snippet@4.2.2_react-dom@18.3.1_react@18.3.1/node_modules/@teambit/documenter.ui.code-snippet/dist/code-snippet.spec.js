"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const code_snippet_composition_1 = require("./code-snippet.composition");
describe('Code snippet', () => {
    it('should render', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(code_snippet_composition_1.CodeSnippetExample, null));
        const rendered = getByTestId('test-code-snippet');
        expect(rendered).toBeInTheDocument();
    });
    it('should render with code text', () => {
        const { getByText } = (0, react_2.render)(react_1.default.createElement(code_snippet_composition_1.CodeSnippetExample, null));
        const rendered = getByText('export');
        expect(rendered).toBeTruthy();
    });
});
//# sourceMappingURL=code-snippet.spec.js.map