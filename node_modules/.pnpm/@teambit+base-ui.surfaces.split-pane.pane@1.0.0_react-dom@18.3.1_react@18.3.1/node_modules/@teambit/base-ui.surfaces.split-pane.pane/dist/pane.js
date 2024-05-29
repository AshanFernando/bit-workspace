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
exports.Pane = void 0;
const base_ui_surfaces_split_pane_layout_1 = require("@teambit/base-ui.surfaces.split-pane.layout");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const pane_module_scss_1 = __importDefault(require("./pane.module.scss"));
function Pane(_a) {
    var { size, style, layout, className } = _a, rest = __rest(_a, ["size", "style", "layout", "className"]);
    const runtimeStyles = {};
    const sizeProp = layoutToStyle(layout);
    if (sizeProp && size !== undefined) {
        runtimeStyles[sizeProp] = size;
        runtimeStyles.flexShrink = 0;
    }
    if (size === undefined) {
        runtimeStyles.flexGrow = 1;
        runtimeStyles.flexBasis = 0;
    }
    return (react_1.default.createElement("div", Object.assign({}, rest, { className: classnames_1.default(pane_module_scss_1.default.pane, className), style: Object.assign(Object.assign({}, style), runtimeStyles) })));
}
exports.Pane = Pane;
// reverting to using height/width. flex grow/basis has some negative side effects
function layoutToStyle(layout) {
    if (!layout)
        return undefined;
    if (layout.includes(base_ui_surfaces_split_pane_layout_1.LayoutFeatures.column)) {
        return 'height';
    }
    if (layout.includes(base_ui_surfaces_split_pane_layout_1.LayoutFeatures.row)) {
        return 'width';
    }
    return undefined;
}
//# sourceMappingURL=pane.js.map