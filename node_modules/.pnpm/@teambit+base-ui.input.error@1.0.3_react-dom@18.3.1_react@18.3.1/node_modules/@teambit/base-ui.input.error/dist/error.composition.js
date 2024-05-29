"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = void 0;
const react_1 = __importDefault(require("react"));
const base_ui_theme_theme_provider_1 = require("@teambit/base-ui.theme.theme-provider");
const error_1 = require("./error");
const ErrorMessage = () => (react_1.default.createElement(base_ui_theme_theme_provider_1.Theme, null,
    react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'center' } },
        react_1.default.createElement(error_1.Error, null, "error message!"))));
exports.ErrorMessage = ErrorMessage;
//# sourceMappingURL=error.composition.js.map