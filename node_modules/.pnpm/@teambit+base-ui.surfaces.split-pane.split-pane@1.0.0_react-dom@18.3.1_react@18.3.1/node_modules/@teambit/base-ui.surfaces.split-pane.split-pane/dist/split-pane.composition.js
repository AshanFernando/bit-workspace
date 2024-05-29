"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegativeSyntax = exports.Percent = exports.WithFatSplitter = void 0;
const base_ui_surfaces_split_pane_fat_splitter_1 = require("@teambit/base-ui.surfaces.split-pane.fat-splitter");
const base_ui_surfaces_split_pane_layout_1 = require("@teambit/base-ui.surfaces.split-pane.layout");
const base_ui_surfaces_split_pane_pane_1 = require("@teambit/base-ui.surfaces.split-pane.pane");
const react_1 = __importDefault(require("react"));
const split_pane_1 = require("./split-pane");
function WithFatSplitter() {
    return (react_1.default.createElement(split_pane_1.SplitPane, { style: { border: '1px solid black', height: 50 }, layout: base_ui_surfaces_split_pane_layout_1.Layout.row },
        react_1.default.createElement(base_ui_surfaces_split_pane_pane_1.Pane, null, "first"),
        react_1.default.createElement(base_ui_surfaces_split_pane_fat_splitter_1.FatSplitter, null),
        react_1.default.createElement(base_ui_surfaces_split_pane_pane_1.Pane, null,
            "lorem",
            react_1.default.createElement("br", null),
            "ipsum")));
}
exports.WithFatSplitter = WithFatSplitter;
function Percent() {
    return (react_1.default.createElement(split_pane_1.SplitPane, { style: { height: 100 }, size: "38%", layout: base_ui_surfaces_split_pane_layout_1.Layout.column },
        react_1.default.createElement(base_ui_surfaces_split_pane_pane_1.Pane, { style: { border: '1px solid black' } }, "first"),
        react_1.default.createElement(base_ui_surfaces_split_pane_fat_splitter_1.FatSplitter, null),
        react_1.default.createElement(base_ui_surfaces_split_pane_pane_1.Pane, { style: { border: '1px solid black' } }, "second")));
}
exports.Percent = Percent;
function NegativeSyntax() {
    return (react_1.default.createElement(split_pane_1.SplitPane, { style: { height: 100 }, size: "-40px", layout: base_ui_surfaces_split_pane_layout_1.Layout.column },
        react_1.default.createElement(base_ui_surfaces_split_pane_pane_1.Pane, { style: { border: '1px solid black' } }, "first"),
        react_1.default.createElement(base_ui_surfaces_split_pane_fat_splitter_1.FatSplitter, null),
        react_1.default.createElement(base_ui_surfaces_split_pane_pane_1.Pane, { style: { border: '1px solid black' } }, "second")));
}
exports.NegativeSyntax = NegativeSyntax;
//# sourceMappingURL=split-pane.composition.js.map