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
exports.Splitter = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const splitter_module_scss_1 = __importDefault(require("./splitter.module.scss"));
function Splitter(_a) {
    var { onDragging, isDragging, className } = _a, rest = __rest(_a, ["onDragging", "isDragging", "className"]);
    return (react_1.default.createElement("div", Object.assign({}, rest, { className: classnames_1.default(splitter_module_scss_1.default.splitter, className), onMouseDown: () => onDragging === null || onDragging === void 0 ? void 0 : onDragging(true), onTouchStart: () => onDragging === null || onDragging === void 0 ? void 0 : onDragging(true) })));
}
exports.Splitter = Splitter;
//# sourceMappingURL=splitter.js.map