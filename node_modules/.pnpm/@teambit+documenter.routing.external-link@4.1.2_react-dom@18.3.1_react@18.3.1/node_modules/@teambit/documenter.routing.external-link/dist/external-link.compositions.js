"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
const react_1 = __importDefault(require("react"));
const external_link_1 = require("./external-link");
const Preview = () => {
    return react_1.default.createElement(external_link_1.ExternalLink, { href: "https://bit.dev" }, "some link");
};
exports.Preview = Preview;
//# sourceMappingURL=external-link.compositions.js.map