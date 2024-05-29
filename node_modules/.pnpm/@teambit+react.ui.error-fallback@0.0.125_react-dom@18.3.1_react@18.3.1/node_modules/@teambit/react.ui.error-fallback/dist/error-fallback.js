"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorFallback = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const design_ui_icon_button_1 = require("@teambit/design.ui.icon-button");
const base_ui_styles_flex_center_1 = require("@teambit/base-ui.styles.flex-center");
const error_fallback_module_scss_1 = __importDefault(require("./error-fallback.module.scss"));
function ErrorFallback({ 
/* error, */
resetErrorBoundary, className, children = 'Failed to render', cta = 'try again', }) {
    const handleClick = () => __awaiter(this, void 0, void 0, function* () {
        yield new Promise((resolve) => setTimeout(resolve, 480));
        resetErrorBoundary();
    });
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(error_fallback_module_scss_1.default.errorFallback, base_ui_styles_flex_center_1.flexCenter, className) },
        react_1.default.createElement("div", { className: error_fallback_module_scss_1.default.icon }),
        react_1.default.createElement("div", { className: error_fallback_module_scss_1.default.message }, children),
        react_1.default.createElement(design_ui_icon_button_1.IconButton, { onClick: handleClick, className: error_fallback_module_scss_1.default.retryButton }, cta)));
}
exports.ErrorFallback = ErrorFallback;
//# sourceMappingURL=error-fallback.js.map