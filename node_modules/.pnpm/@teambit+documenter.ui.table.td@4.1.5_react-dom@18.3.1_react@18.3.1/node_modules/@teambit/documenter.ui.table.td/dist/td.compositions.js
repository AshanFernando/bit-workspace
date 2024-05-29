"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TdExample = void 0;
const react_1 = __importDefault(require("react"));
const td_1 = require("./td");
const TdExample = () => {
    return (react_1.default.createElement("table", null,
        react_1.default.createElement("tbody", null,
            react_1.default.createElement("tr", null,
                react_1.default.createElement(td_1.Td, null, "Td text")))));
};
exports.TdExample = TdExample;
//# sourceMappingURL=td.compositions.js.map