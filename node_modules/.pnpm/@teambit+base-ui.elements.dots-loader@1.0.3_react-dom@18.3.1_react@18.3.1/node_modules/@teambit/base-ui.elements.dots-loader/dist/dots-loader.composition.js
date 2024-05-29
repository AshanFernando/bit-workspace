"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicDotsLoader = void 0;
const react_1 = __importDefault(require("react"));
const dots_loader_1 = require("./dots-loader");
const base_ui_theme_theme_provider_1 = require("@teambit/base-ui.theme.theme-provider");
const BasicDotsLoader = () => (react_1.default.createElement(base_ui_theme_theme_provider_1.Theme, null,
    react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center' } },
        react_1.default.createElement(dots_loader_1.DotsLoader, null))));
exports.BasicDotsLoader = BasicDotsLoader;
//# sourceMappingURL=dots-loader.composition.js.map