"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedH5Example = exports.LinkedH1Example = exports.CreateH6Example = exports.CreateH5Example = exports.CreateH4Example = exports.CreateH3Example = exports.CreateH2Example = exports.CreateH1Example = void 0;
const react_1 = __importDefault(require("react"));
const create_heading_1 = require("./create-heading");
const CreateH1Example = () => {
    const Heading = (0, create_heading_1.createHeading)('lg');
    return react_1.default.createElement(Heading, { "data-testid": "test-create-heading" }, "H1 size");
};
exports.CreateH1Example = CreateH1Example;
const CreateH2Example = () => {
    const Heading = (0, create_heading_1.createHeading)('md');
    return react_1.default.createElement(Heading, { "data-testid": "test-create-heading" }, "H2 size");
};
exports.CreateH2Example = CreateH2Example;
const CreateH3Example = () => {
    const Heading = (0, create_heading_1.createHeading)('sm');
    return react_1.default.createElement(Heading, { "data-testid": "test-create-heading" }, "H3 size");
};
exports.CreateH3Example = CreateH3Example;
const CreateH4Example = () => {
    const Heading = (0, create_heading_1.createHeading)('xs');
    return react_1.default.createElement(Heading, { "data-testid": "test-create-heading" }, "H4 size");
};
exports.CreateH4Example = CreateH4Example;
const CreateH5Example = () => {
    const Heading = (0, create_heading_1.createHeading)('xxs');
    return react_1.default.createElement(Heading, { "data-testid": "test-create-heading" }, "H5 size");
};
exports.CreateH5Example = CreateH5Example;
const CreateH6Example = () => {
    const Heading = (0, create_heading_1.createHeading)('xxs');
    return react_1.default.createElement(Heading, { "data-testid": "test-create-heading" }, "H6 size");
};
exports.CreateH6Example = CreateH6Example;
const LinkedH1Example = () => {
    return react_1.default.createElement(create_heading_1.h1, { link: "link" }, "Linked H1");
};
exports.LinkedH1Example = LinkedH1Example;
const LinkedH5Example = () => {
    return react_1.default.createElement(create_heading_1.h5, { link: "link" }, "Linked H5");
};
exports.LinkedH5Example = LinkedH5Example;
//# sourceMappingURL=create-heading.composition.js.map