"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
const react_1 = __importDefault(require("react"));
const index_1 = require("./index");
function Preview() {
    return (react_1.default.createElement("div", { className: index_1.flexCenter, style: {
            width: 100,
            height: 50,
            margin: 16,
            border: '1px solid black',
            borderRadius: 5,
        } },
        react_1.default.createElement("span", null, "centered")));
}
exports.Preview = Preview;
//# sourceMappingURL=flex-center.compositions.js.map