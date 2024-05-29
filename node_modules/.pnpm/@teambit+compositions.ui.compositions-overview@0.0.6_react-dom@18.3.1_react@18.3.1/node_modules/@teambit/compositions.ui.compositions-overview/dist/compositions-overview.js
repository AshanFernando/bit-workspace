"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositionsOverview = void 0;
const react_1 = __importDefault(require("react"));
const compositions_ui_composition_card_1 = require("@teambit/compositions.ui.composition-card");
const compositions_overview_module_scss_1 = __importDefault(require("./compositions-overview.module.scss"));
function CompositionsOverview({ compositions, compositionCardClass }) {
    return (react_1.default.createElement("div", { className: compositions_overview_module_scss_1.default.background }, compositions &&
        Object.entries(compositions).map(([key, composition]) => (react_1.default.createElement(compositions_ui_composition_card_1.CompositionCard, { key: key, Composition: composition, name: key, className: compositionCardClass })))));
}
exports.CompositionsOverview = CompositionsOverview;
//# sourceMappingURL=compositions-overview.js.map