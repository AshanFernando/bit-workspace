"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Highlighted = exports.LargeText = exports.Preview = void 0;
const react_1 = __importDefault(require("react"));
const inline_code_1 = require("./inline-code");
function Preview() {
    return react_1.default.createElement(inline_code_1.InlineCode, null, "inline-code");
}
exports.Preview = Preview;
const LargeText = () => {
    return (react_1.default.createElement("div", { style: { fontSize: 20 } },
        "Use ",
        react_1.default.createElement(inline_code_1.InlineCode, null, "highlighted text"),
        " to insert code"));
};
exports.LargeText = LargeText;
const Highlighted = () => {
    return (react_1.default.createElement("div", null,
        "Use ",
        react_1.default.createElement(inline_code_1.InlineCode, { highlight: true }, "highlighted text"),
        " to highlight code"));
};
exports.Highlighted = Highlighted;
//# sourceMappingURL=inline-code.composition.js.map