"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const heading_composition_1 = require("./heading.composition");
it('should render correct text in Heading', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(heading_composition_1.H1DefaultHeading, null));
    const rendered = getByText('H1 Heading');
    expect(rendered).toBeInstanceOf(HTMLElement);
});
it('should render as h1 by default', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(heading_composition_1.H1DefaultHeading, null));
    const rendered = getByText('H1 Heading');
    expect(rendered.tagName).toEqual('H1');
});
it('should render as h2 when defined', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(heading_composition_1.H2Heading, null));
    const rendered = getByText('H2 Heading');
    expect(rendered.tagName).toEqual('H2');
});
it('should render as h3 when defined', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(heading_composition_1.H3Heading, null));
    const rendered = getByText('H3 Heading');
    expect(rendered.tagName).toEqual('H3');
});
it('should render as h4 when defined', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(heading_composition_1.H4Heading, null));
    const rendered = getByText('H4 Heading');
    expect(rendered.tagName).toEqual('H4');
});
it('should render as h5 when defined', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(heading_composition_1.H5Heading, null));
    const rendered = getByText('H5 Heading');
    expect(rendered.tagName).toEqual('H5');
});
it('should render as h6 when defined', () => {
    const { getByText } = (0, react_2.render)(react_1.default.createElement(heading_composition_1.H6Heading, null));
    const rendered = getByText('H6 Heading');
    expect(rendered.tagName).toEqual('H6');
});
//# sourceMappingURL=heading.spec.js.map