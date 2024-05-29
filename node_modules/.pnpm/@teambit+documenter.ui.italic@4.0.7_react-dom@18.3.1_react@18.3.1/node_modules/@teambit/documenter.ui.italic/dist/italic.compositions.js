"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItalicExample = void 0;
const react_1 = __importDefault(require("react"));
const italic_1 = require("./italic");
const ItalicExample = () => {
    return react_1.default.createElement(italic_1.Italic, null, "Italic text");
};
exports.ItalicExample = ItalicExample;
//# sourceMappingURL=italic.compositions.js.map