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
exports.Separator = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const separator_module_scss_1 = __importDefault(require("./separator.module.scss"));
/**
 *
 * An hr component for separating sections.
 */
function Separator(_a) {
    var { className } = _a, rest = __rest(_a, ["className"]);
    return react_1.default.createElement("hr", Object.assign({ className: (0, classnames_1.default)(separator_module_scss_1.default.separator, className) }, rest));
}
exports.Separator = Separator;
//# sourceMappingURL=separator.js.map