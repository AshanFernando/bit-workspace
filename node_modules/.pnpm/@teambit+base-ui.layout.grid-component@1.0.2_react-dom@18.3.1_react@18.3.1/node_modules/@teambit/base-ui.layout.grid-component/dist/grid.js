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
exports.Grid = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const grid_module_scss_1 = __importDefault(require("./grid.module.scss"));
const grid_template_1 = require("./grid-template");
/**
 * A responsive css-grid wrapper.
 * Use the `col` properties to set column count in each resolution.
 */
class Grid extends react_1.PureComponent {
    render() {
        const _a = this.props, { className, col, colL, colLg, colMd, colSm, colXl, colXs } = _a, rest = __rest(_a, ["className", "col", "colL", "colLg", "colMd", "colSm", "colXl", "colXs"]);
        const classes = [className, grid_module_scss_1.default.gridContainer];
        //yup, it's dirty, but it does exactly what it is supposed to do.
        // don't abuse it
        if (col !== undefined)
            classes.push(grid_template_1.colGrid[col]);
        if (colL !== undefined)
            classes.push(grid_template_1.colGridL[colL]);
        if (colLg !== undefined)
            classes.push(grid_template_1.colGridLg[colLg]);
        if (colMd !== undefined)
            classes.push(grid_template_1.colGridMd[colMd]);
        if (colSm !== undefined)
            classes.push(grid_template_1.colGridSm[colSm]);
        if (colXl !== undefined)
            classes.push(grid_template_1.colGridXl[colXl]);
        if (colXs !== undefined)
            classes.push(grid_template_1.colGridXs[colXs]);
        return (react_1.default.createElement("div", Object.assign({ "data-bit-id": "teambit.base-ui/layout/grid-component" }, rest, { className: (0, classnames_1.default)(...classes) })));
    }
}
exports.Grid = Grid;
//# sourceMappingURL=grid.js.map