"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockQuote = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const block_quote_module_scss_1 = __importDefault(require("./block-quote.module.scss"));
function BlockQuote(_a) {
    var { className, children } = _a, rest = __rest(_a, ["className", "children"]);
    return (react_1.default.createElement("blockquote", Object.assign({}, rest, { className: (0, classnames_1.default)(block_quote_module_scss_1.default.blockQuote, className) }), children));
}
exports.BlockQuote = BlockQuote;
//# sourceMappingURL=block-quote.js.map