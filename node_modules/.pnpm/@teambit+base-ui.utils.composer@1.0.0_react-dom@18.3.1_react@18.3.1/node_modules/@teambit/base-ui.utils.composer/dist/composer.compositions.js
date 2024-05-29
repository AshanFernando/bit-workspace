"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithProps = exports.Preview = void 0;
const react_1 = __importDefault(require("react"));
const composer_1 = require("./composer");
function Deco01({ children }) {
    return (react_1.default.createElement("div", { style: {
            border: '1px solid gray',
            borderRadius: 5,
            width: 'fit-content',
            padding: 3,
        } },
        react_1.default.createElement("div", null, "deco01"),
        children));
}
function Deco02({ children, value = 'deco02' }) {
    return (react_1.default.createElement("div", { style: { border: '1px solid lightgray', borderRadius: 5, padding: 3 } },
        react_1.default.createElement("div", null, value),
        children));
}
const Preview = () => {
    // memoize array in real world scenarios!
    return react_1.default.createElement(composer_1.Composer, { components: [Deco01, Deco02] }, "children");
};
exports.Preview = Preview;
const WithProps = () => {
    // memoize array in real world scenarios!
    return (react_1.default.createElement(composer_1.Composer, { components: [Deco01, [Deco02, { value: '"custom value"' }]] }, "children"));
};
exports.WithProps = WithProps;
//# sourceMappingURL=composer.compositions.js.map