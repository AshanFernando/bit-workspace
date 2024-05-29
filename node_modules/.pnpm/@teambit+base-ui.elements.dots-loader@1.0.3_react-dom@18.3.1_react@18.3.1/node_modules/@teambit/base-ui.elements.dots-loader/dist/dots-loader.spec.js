"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const dots_loader_composition_1 = require("./dots-loader.composition");
describe('Dots loader', () => {
    it('should render correctly', () => {
        react_2.render(react_1.default.createElement(dots_loader_composition_1.BasicDotsLoader, null));
    });
});
//# sourceMappingURL=dots-loader.spec.js.map