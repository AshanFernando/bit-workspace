"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedList = exports.UlExample = void 0;
const react_1 = __importDefault(require("react"));
const ul_1 = require("./ul");
const UlExample = () => {
    return (react_1.default.createElement(ul_1.Ul, null,
        react_1.default.createElement("li", null, "Ul text"),
        react_1.default.createElement("li", null, "Ul text"),
        react_1.default.createElement("li", null, "Ul text")));
};
exports.UlExample = UlExample;
const NestedList = () => {
    return (react_1.default.createElement(ul_1.Ul, null,
        react_1.default.createElement("li", null, "Ul text"),
        react_1.default.createElement("li", null, "Ul text"),
        react_1.default.createElement("li", null, "Ul text"),
        react_1.default.createElement(ul_1.Ul, null,
            react_1.default.createElement("li", null, "Ul text"),
            react_1.default.createElement("li", null, "Ul text"),
            react_1.default.createElement(ul_1.Ul, null,
                react_1.default.createElement("li", null, "Ul text"),
                react_1.default.createElement("li", null, "Ul text"),
                react_1.default.createElement("li", null, "Ul text")),
            react_1.default.createElement("li", null, "Ul text"))));
};
exports.NestedList = NestedList;
//# sourceMappingURL=ul.compositions.js.map