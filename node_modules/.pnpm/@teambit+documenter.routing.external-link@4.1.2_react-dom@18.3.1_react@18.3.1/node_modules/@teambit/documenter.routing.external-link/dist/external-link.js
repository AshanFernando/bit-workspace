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
exports.ExternalLink = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const external_link_module_scss_1 = __importDefault(require("./external-link.module.scss"));
function ExternalLink(_a) {
    var { href, children, className } = _a, rest = __rest(_a, ["href", "children", "className"]);
    return (react_1.default.createElement("a", Object.assign({}, rest, { target: "_blank", href: href, className: (0, classnames_1.default)(external_link_module_scss_1.default.link, className) }), children));
}
exports.ExternalLink = ExternalLink;
//# sourceMappingURL=external-link.js.map