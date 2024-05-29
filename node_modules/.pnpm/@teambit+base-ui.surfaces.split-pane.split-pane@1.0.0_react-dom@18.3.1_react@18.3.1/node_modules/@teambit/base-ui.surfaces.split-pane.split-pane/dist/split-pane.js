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
exports.SplitPane = void 0;
const base_ui_surfaces_split_pane_layout_1 = require("@teambit/base-ui.surfaces.split-pane.layout");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const calc_split_1 = require("./calc-split");
const split_pane_module_scss_1 = __importDefault(require("./split-pane.module.scss"));
const use_drag_tracker_1 = require("./use-drag-tracker");
function SplitPane(_a) {
    var { layout = base_ui_surfaces_split_pane_layout_1.Layout.column, size = '38%', className, children } = _a, rest = __rest(_a, ["layout", "size", "className", "children"]);
    const containerRef = react_1.default.createRef();
    const [snapshot, isDragging, setDragging] = use_drag_tracker_1.useDragTracker(containerRef);
    const [A, B] = calc_split_1.calcSplit(snapshot, layout, size);
    // clone children to add props
    const [left, splitter, right] = children;
    const leftWithSize = react_1.default.cloneElement(left, { size: A, layout });
    const rightWithSize = react_1.default.cloneElement(right, { size: B, layout });
    const splitterWithDrag = react_1.default.cloneElement(splitter, {
        onDragging: setDragging,
        isDragging,
    });
    return (react_1.default.createElement("div", Object.assign({}, rest, { ref: containerRef, className: classnames_1.default(isDragging && split_pane_module_scss_1.default.isDragging, split_pane_module_scss_1.default.splitPane, className), "data-is-dragging": isDragging, "data-split-layout": layout }),
        leftWithSize,
        splitterWithDrag,
        rightWithSize));
}
exports.SplitPane = SplitPane;
//# sourceMappingURL=split-pane.js.map