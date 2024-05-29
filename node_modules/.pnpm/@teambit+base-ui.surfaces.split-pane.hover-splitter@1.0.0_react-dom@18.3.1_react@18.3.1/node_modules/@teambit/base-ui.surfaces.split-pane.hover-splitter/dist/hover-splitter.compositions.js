"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vertical = exports.Preview = void 0;
const react_1 = __importDefault(require("react"));
const base_ui_surfaces_split_pane_split_pane_1 = require("@teambit/base-ui.surfaces.split-pane.split-pane");
const splitter_1 = require("./splitter");
const Preview = () => {
    return (react_1.default.createElement(base_ui_surfaces_split_pane_split_pane_1.SplitPane, { style: { border: '1px solid black', height: 200 }, layout: base_ui_surfaces_split_pane_split_pane_1.Layout.row },
        react_1.default.createElement(base_ui_surfaces_split_pane_split_pane_1.Pane, { style: { textAlign: 'center' } }, "first"),
        react_1.default.createElement(splitter_1.HoverSplitter, null),
        react_1.default.createElement(base_ui_surfaces_split_pane_split_pane_1.Pane, { style: { textAlign: 'center' } },
            "lorem",
            react_1.default.createElement("br", null),
            "ipsum")));
};
exports.Preview = Preview;
const Vertical = () => {
    return (react_1.default.createElement(base_ui_surfaces_split_pane_split_pane_1.SplitPane, { style: { border: '1px solid black', height: 200 }, layout: base_ui_surfaces_split_pane_split_pane_1.Layout.column },
        react_1.default.createElement(base_ui_surfaces_split_pane_split_pane_1.Pane, { style: { textAlign: 'center' } }, "first"),
        react_1.default.createElement(splitter_1.HoverSplitter, null),
        react_1.default.createElement(base_ui_surfaces_split_pane_split_pane_1.Pane, { style: { textAlign: 'center' } },
            "lorem",
            react_1.default.createElement("br", null),
            "ipsum")));
};
exports.Vertical = Vertical;
//# sourceMappingURL=hover-splitter.compositions.js.map