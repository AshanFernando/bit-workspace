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
exports.Tr = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const tr_module_scss_1 = __importDefault(require("./tr.module.scss"));
function Tr(_a) {
    var { children, className } = _a, rest = __rest(_a, ["children", "className"]);
    return (react_1.default.createElement("tr", Object.assign({}, rest, { className: (0, classnames_1.default)(tr_module_scss_1.default.tr, className) }), children));
}
exports.Tr = Tr;
//# sourceMappingURL=tr.js.map