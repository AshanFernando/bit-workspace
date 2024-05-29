"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.Playground = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const react_live_1 = require("react-live");
const base_ui_surfaces_split_pane_split_pane_1 = require("@teambit/base-ui.surfaces.split-pane.split-pane");
const base_ui_surfaces_split_pane_hover_splitter_1 = require("@teambit/base-ui.surfaces.split-pane.hover-splitter");
// @ts-ignore - missing types
const react_use_dimensions_1 = __importDefault(require("react-use-dimensions"));
const use_debounce_1 = require("use-debounce");
const oceanicNext_1 = __importDefault(require("prism-react-renderer/themes/oceanicNext"));
const base_ui_input_error_1 = require("@teambit/base-ui.input.error");
const react_playground_module_scss_1 = __importDefault(require("./react-playground.module.scss"));
/**
 *
 * A react-live wrapper with document oriented features.
 */
function Playground(_a) {
    var { code, scope, style, className } = _a, rest = __rest(_a, ["code", "scope", "style", "className"]);
    // don't show trailing new line at the end of the file
    const _code = (0, react_1.useMemo)(() => code === null || code === void 0 ? void 0 : code.toString().replace(/\n$/, '').trim(), [code]);
    const [ref, { width }] = (0, react_use_dimensions_1.default)();
    const debouncedSize = (0, use_debounce_1.useDebounce)(width, 300, { leading: true });
    const isColumn = +debouncedSize[0] <= 500;
    const placement = isColumn ? base_ui_surfaces_split_pane_split_pane_1.Layout.columnReverse : base_ui_surfaces_split_pane_split_pane_1.Layout.row;
    if (!width)
        return react_1.default.createElement("div", { ref: ref });
    return (react_1.default.createElement(react_live_1.LiveProvider, { code: _code, scope: scope, theme: oceanicNext_1.default },
        react_1.default.createElement("div", Object.assign({ ref: ref, className: (0, classnames_1.default)(className, react_playground_module_scss_1.default.playground, isColumn ? react_playground_module_scss_1.default.column : react_playground_module_scss_1.default.row) }, rest),
            react_1.default.createElement(base_ui_surfaces_split_pane_split_pane_1.SplitPane, { className: react_playground_module_scss_1.default.main, size: '50%', layout: placement },
                react_1.default.createElement(base_ui_surfaces_split_pane_split_pane_1.Pane, { className: (0, classnames_1.default)(react_playground_module_scss_1.default.codePane) },
                    react_1.default.createElement(react_live_1.LiveEditor, { className: (0, classnames_1.default)(react_playground_module_scss_1.default.editor) })),
                react_1.default.createElement(base_ui_surfaces_split_pane_hover_splitter_1.HoverSplitter, { className: react_playground_module_scss_1.default.splitter }),
                react_1.default.createElement(base_ui_surfaces_split_pane_split_pane_1.Pane, { className: (0, classnames_1.default)(react_playground_module_scss_1.default.previewPane) },
                    react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement(react_live_1.LivePreview, { className: react_playground_module_scss_1.default.previewBox }),
                        react_1.default.createElement(react_live_1.LiveError, { className: (0, classnames_1.default)(base_ui_input_error_1.Error, react_playground_module_scss_1.default.error) })))))));
}
exports.Playground = Playground;
//# sourceMappingURL=react-playground.js.map