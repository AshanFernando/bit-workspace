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
exports.CompositionErrorFallback = exports.CompositionCard = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const react_error_boundary_1 = require("react-error-boundary");
const base_ui_surfaces_card_1 = require("@teambit/base-ui.surfaces.card");
const base_ui_theme_accent_color_1 = require("@teambit/base-ui.theme.accent-color");
const react_ui_error_fallback_1 = require("@teambit/react.ui.error-fallback");
const compositions_model_composition_id_1 = require("@teambit/compositions.model.composition-id");
const evangelist_elements_icon_1 = require("@teambit/evangelist.elements.icon");
const base_ui_text_themed_text_1 = require("@teambit/base-ui.text.themed-text");
const composition_card_module_scss_1 = __importDefault(require("./composition-card.module.scss"));
function CompositionCard(_a) {
    var { Composition, name, link, className } = _a, rest = __rest(_a, ["Composition", "name", "link", "className"]);
    const { canvas, compositionName } = Composition;
    const humanizedName = (0, react_1.useMemo)(() => compositionName || (0, compositions_model_composition_id_1.humanizeCompositionId)(name), [name, compositionName]);
    return (react_1.default.createElement(base_ui_surfaces_card_1.Card, Object.assign({ elevation: "low", className: (0, classnames_1.default)(className, composition_card_module_scss_1.default.compositionCard) }, rest),
        react_1.default.createElement(react_error_boundary_1.ErrorBoundary, { FallbackComponent: CompositionErrorFallback },
            react_1.default.createElement("div", { style: canvas, className: composition_card_module_scss_1.default.compositionContainer },
                react_1.default.createElement(Composition, null))),
        react_1.default.createElement("div", { className: (0, classnames_1.default)(composition_card_module_scss_1.default.title, base_ui_theme_accent_color_1.colorPalette.neutralHeavy, base_ui_text_themed_text_1.themedText) },
            react_1.default.createElement("span", null, humanizedName),
            link && (react_1.default.createElement("a", { className: composition_card_module_scss_1.default.linkToComposition, target: "_blank", rel: "noopener noreferrer", href: link },
                react_1.default.createElement(evangelist_elements_icon_1.Icon, { of: "open-tab" }))))));
}
exports.CompositionCard = CompositionCard;
function CompositionErrorFallback(props) {
    return react_1.default.createElement(react_ui_error_fallback_1.ErrorFallback, Object.assign({}, props, { className: (0, classnames_1.default)(props.className, composition_card_module_scss_1.default.compositionCardError) }));
}
exports.CompositionErrorFallback = CompositionErrorFallback;
//# sourceMappingURL=composition-card.js.map