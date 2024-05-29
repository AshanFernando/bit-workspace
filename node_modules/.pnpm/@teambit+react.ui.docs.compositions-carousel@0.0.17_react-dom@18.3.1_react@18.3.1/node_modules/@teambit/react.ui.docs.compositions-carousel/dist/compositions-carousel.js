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
exports.CompositionsCarousel = void 0;
const react_1 = __importDefault(require("react"));
const react_ui_docs_apply_providers_1 = require("@teambit/react.ui.docs.apply-providers");
const compositions_ui_compositions_overview_1 = require("@teambit/compositions.ui.compositions-overview");
const documenter_ui_linked_heading_1 = require("@teambit/documenter.ui.linked-heading");
const documenter_ui_section_1 = require("@teambit/documenter.ui.section");
function CompositionsCarousel(_a) {
    var { compositions, compositionCardClass, renderingContext } = _a, rest = __rest(_a, ["compositions", "compositionCardClass", "renderingContext"]);
    if (!compositions || Object.keys(compositions).length === 0) {
        return null;
    }
    return (react_1.default.createElement(documenter_ui_section_1.Section, Object.assign({}, rest),
        react_1.default.createElement(documenter_ui_linked_heading_1.LinkedHeading, null, "Compositions"),
        react_1.default.createElement(react_ui_docs_apply_providers_1.ApplyProviders, { renderingContext: renderingContext },
            react_1.default.createElement(compositions_ui_compositions_overview_1.CompositionsOverview, { compositions: compositions, compositionCardClass: compositionCardClass }))));
}
exports.CompositionsCarousel = CompositionsCarousel;
//# sourceMappingURL=compositions-carousel.js.map