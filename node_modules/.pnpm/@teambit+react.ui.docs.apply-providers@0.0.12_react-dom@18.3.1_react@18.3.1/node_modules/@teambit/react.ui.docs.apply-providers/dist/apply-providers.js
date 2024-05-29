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
exports.ApplyProviders = void 0;
const react_1 = __importDefault(require("react"));
const react_error_boundary_1 = require("react-error-boundary");
const base_ui_utils_composer_1 = require("@teambit/base-ui.utils.composer");
const react_ui_error_fallback_1 = require("@teambit/react.ui.error-fallback");
const react_2 = require("@teambit/react");
/**
 * applies providers from rendering context, and error boundary
 */
function ApplyProviders(_a) {
    var { renderingContext, children } = _a, rest = __rest(_a, ["renderingContext", "children"]);
    const { providers = [] } = renderingContext.get(react_2.ReactAspect.id) || {};
    return (react_1.default.createElement("div", Object.assign({}, rest),
        react_1.default.createElement(react_error_boundary_1.ErrorBoundary, { FallbackComponent: react_ui_error_fallback_1.ErrorFallback },
            react_1.default.createElement(base_ui_utils_composer_1.Composer, { components: providers }, children))));
}
exports.ApplyProviders = ApplyProviders;
//# sourceMappingURL=apply-providers.js.map