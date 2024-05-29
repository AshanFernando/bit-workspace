"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositionCardWithLink = exports.LargeComposition = exports.Preview = void 0;
const react_1 = __importDefault(require("react"));
const documenter_theme_theme_compositions_1 = require("@teambit/documenter.theme.theme-compositions");
const composition_card_1 = require("./composition-card");
function Preview() {
    const CompositionWithButton = () => react_1.default.createElement("button", null, "ClickMe!");
    return (react_1.default.createElement(documenter_theme_theme_compositions_1.ThemeCompositions, null,
        react_1.default.createElement(composition_card_1.CompositionCard, { Composition: CompositionWithButton, name: "CompositionWithButton" })));
}
exports.Preview = Preview;
function LargeComposition() {
    const CompositionWithLotsOfText = () => (react_1.default.createElement("div", null,
        "Lorem ipsum dolor sit amet,",
        react_1.default.createElement("br", null),
        "consectetur adipiscing elit.",
        react_1.default.createElement("br", null),
        "Etiam sed neque congue,",
        react_1.default.createElement("br", null),
        "bibendum neque a, faucibus nibh."));
    return (react_1.default.createElement(documenter_theme_theme_compositions_1.ThemeCompositions, null,
        react_1.default.createElement(composition_card_1.CompositionCard, { Composition: CompositionWithLotsOfText, name: "CompositionWithLotsOfText" })));
}
exports.LargeComposition = LargeComposition;
function CompositionCardWithLink() {
    const CompositionWithButton = () => react_1.default.createElement("button", null, "ClickMe!");
    return (react_1.default.createElement(documenter_theme_theme_compositions_1.ThemeCompositions, null,
        react_1.default.createElement(composition_card_1.CompositionCard, { Composition: CompositionWithButton, name: "CompositionWithButton", link: "https://bit.dev" })));
}
exports.CompositionCardWithLink = CompositionCardWithLink;
//# sourceMappingURL=composition-card.composition.js.map