"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParagraphXxs = exports.ParagraphXs = exports.ParagraphSm = exports.ParagraphMd = exports.ParagraphLg = exports.ParagraphXl = exports.ParagraphXxl = void 0;
const react_1 = __importDefault(require("react"));
const paragraph_1 = require("./paragraph");
// tODO - make text stay single line
const ParagraphXxl = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(paragraph_1.Paragraph, { size: "xxl" }, "xxl text")));
};
exports.ParagraphXxl = ParagraphXxl;
const ParagraphXl = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(paragraph_1.Paragraph, { size: "xl" }, "xl text")));
};
exports.ParagraphXl = ParagraphXl;
const ParagraphLg = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(paragraph_1.Paragraph, { size: "lg" }, "lg text")));
};
exports.ParagraphLg = ParagraphLg;
const ParagraphMd = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(paragraph_1.Paragraph, { size: "md" }, "md text")));
};
exports.ParagraphMd = ParagraphMd;
const ParagraphSm = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(paragraph_1.Paragraph, { size: "sm" }, "sm text")));
};
exports.ParagraphSm = ParagraphSm;
const ParagraphXs = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(paragraph_1.Paragraph, { size: "xs" }, "xs text")));
};
exports.ParagraphXs = ParagraphXs;
const ParagraphXxs = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(paragraph_1.Paragraph, { size: "xxs" }, "xxs text")));
};
exports.ParagraphXxs = ParagraphXxs;
//# sourceMappingURL=paragraph.composition.js.map