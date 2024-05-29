"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeparatorExample = void 0;
const react_1 = __importDefault(require("react"));
const separator_1 = require("./separator");
// tODO - make text stay single line
const SeparatorExample = () => react_1.default.createElement(separator_1.Separator, null);
exports.SeparatorExample = SeparatorExample;
exports.SeparatorExample.canvas = {
    width: '100%',
};
//# sourceMappingURL=separator.composition.js.map