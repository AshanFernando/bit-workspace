"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedList = exports.OlExample = void 0;
const react_1 = __importDefault(require("react"));
const ol_1 = require("./ol");
const OlExample = () => {
    return (react_1.default.createElement(ol_1.Ol, null,
        react_1.default.createElement("li", null, "Ol text"),
        react_1.default.createElement("li", null, "Ol text"),
        react_1.default.createElement("li", null, "Ol text")));
};
exports.OlExample = OlExample;
const NestedList = () => {
    return (react_1.default.createElement(ol_1.Ol, null,
        react_1.default.createElement("li", null, "Ol text"),
        react_1.default.createElement("li", null, "Ol text"),
        react_1.default.createElement("li", null, "Ol text"),
        react_1.default.createElement(ol_1.Ol, null,
            react_1.default.createElement("li", null, "Ol text"),
            react_1.default.createElement("li", null, "Ol text"),
            react_1.default.createElement(ol_1.Ol, null,
                react_1.default.createElement("li", null, "Ol text"),
                react_1.default.createElement("li", null, "Ol text"),
                react_1.default.createElement("li", null, "Ol text")),
            react_1.default.createElement("li", null, "Ol text"))));
};
exports.NestedList = NestedList;
//# sourceMappingURL=ol.compositions.js.map