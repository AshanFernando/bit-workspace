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
exports.HoverSplitter = void 0;
const base_ui_surfaces_split_pane_splitter_1 = require("@teambit/base-ui.surfaces.split-pane.splitter");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const splitter_module_scss_1 = __importDefault(require("./splitter.module.scss"));
function HoverSplitter(_a) {
    var { children, className } = _a, rest = __rest(_a, ["children", "className"]);
    return (react_1.default.createElement(base_ui_surfaces_split_pane_splitter_1.Splitter, Object.assign({}, rest, { className: classnames_1.default(splitter_module_scss_1.default.hoverSplitter, className) }),
        react_1.default.createElement("div", { className: splitter_module_scss_1.default.highlighter }),
        children));
}
exports.HoverSplitter = HoverSplitter;
//# sourceMappingURL=splitter.js.map