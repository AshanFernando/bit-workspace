"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default_layout = exports.layoutToggleMap = exports.Layout = exports.LayoutFeatures = void 0;
var LayoutFeatures;
(function (LayoutFeatures) {
    LayoutFeatures["row"] = "row";
    LayoutFeatures["column"] = "column";
    LayoutFeatures["reverse"] = "reverse";
    LayoutFeatures["first"] = "first";
    LayoutFeatures["last"] = "last";
})(LayoutFeatures = exports.LayoutFeatures || (exports.LayoutFeatures = {}));
var Layout;
(function (Layout) {
    Layout["row"] = "row";
    Layout["rowReverse"] = "row reverse";
    Layout["column"] = "column";
    Layout["columnReverse"] = "column reverse";
    Layout["top"] = "column first";
    Layout["bottom"] = "column last";
    Layout["topReverse"] = "column reverse first";
    Layout["bottomReverse"] = "column reverse last ";
    Layout["left"] = "row first";
    Layout["right"] = "row last";
    Layout["leftReverse"] = "row reverse first";
    Layout["rightReverse"] = "row reverse last";
})(Layout = exports.Layout || (exports.Layout = {}));
exports.layoutToggleMap = {
    [Layout.columnReverse]: Layout.row,
    [Layout.row]: Layout.columnReverse,
};
exports.default_layout = Layout.row;
//# sourceMappingURL=layouts.js.map