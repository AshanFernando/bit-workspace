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
exports.ThemeToggler = void 0;
const react_1 = __importDefault(require("react"));
const theme_picker_context_1 = require("./theme-picker-context");
function ThemeToggler(_a) {
    var { onClick } = _a, props = __rest(_a, ["onClick"]);
    const applyNextTheme = (0, theme_picker_context_1.useNextTheme)();
    const handleClick = (e) => {
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
        if (e.defaultPrevented)
            return;
        applyNextTheme();
    };
    return react_1.default.createElement("button", Object.assign({}, props, { onClick: handleClick }));
}
exports.ThemeToggler = ThemeToggler;
//# sourceMappingURL=theme-toggler.js.map