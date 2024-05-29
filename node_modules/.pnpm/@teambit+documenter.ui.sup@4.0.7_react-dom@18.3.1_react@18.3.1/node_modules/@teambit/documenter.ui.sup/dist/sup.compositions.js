"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupExample = void 0;
const react_1 = __importDefault(require("react"));
const sup_1 = require("./sup");
const SupExample = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(sup_1.Sup, null, "superscript text example"),
        " next to regular text"));
};
exports.SupExample = SupExample;
//# sourceMappingURL=sup.compositions.js.map