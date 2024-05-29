"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeutralHeavyAccent = exports.NeutralAccent = exports.ErrorAccent = exports.WarningAccent = exports.ProcessAccent = exports.SuccessAccent = exports.ComplementaryAccent = exports.PrimaryAccent = void 0;
const react_1 = __importDefault(require("react"));
const accent_color_1 = require("./accent-color");
const accent_picker_1 = require("./accent-picker");
function PrimaryAccent() {
    return react_1.default.createElement(accent_picker_1.ThemeExample, { className: accent_color_1.colorPalette.primary });
}
exports.PrimaryAccent = PrimaryAccent;
function ComplementaryAccent() {
    return react_1.default.createElement(accent_picker_1.ThemeExample, { className: accent_color_1.colorPalette.complementary });
}
exports.ComplementaryAccent = ComplementaryAccent;
function SuccessAccent() {
    return react_1.default.createElement(accent_picker_1.ThemeExample, { className: accent_color_1.colorPalette.success });
}
exports.SuccessAccent = SuccessAccent;
function ProcessAccent() {
    return react_1.default.createElement(accent_picker_1.ThemeExample, { className: accent_color_1.colorPalette.process });
}
exports.ProcessAccent = ProcessAccent;
function WarningAccent() {
    return react_1.default.createElement(accent_picker_1.ThemeExample, { className: accent_color_1.colorPalette.warning });
}
exports.WarningAccent = WarningAccent;
function ErrorAccent() {
    return react_1.default.createElement(accent_picker_1.ThemeExample, { className: accent_color_1.colorPalette.error });
}
exports.ErrorAccent = ErrorAccent;
function NeutralAccent() {
    return react_1.default.createElement(accent_picker_1.ThemeExample, { className: accent_color_1.colorPalette.neutral });
}
exports.NeutralAccent = NeutralAccent;
function NeutralHeavyAccent() {
    return react_1.default.createElement(accent_picker_1.ThemeExample, { className: accent_color_1.colorPalette.neutralHeavy });
}
exports.NeutralHeavyAccent = NeutralHeavyAccent;
// export function ContinueAccent() {
// 	return <ThemeExample className={colorPalette.continue} />
// }
// export function ConsiderAccent() {
// 	return <ThemeExample className={colorPalette.consider} />
// }
// export function ActionAccent() {
// 	return <ThemeExample className={colorPalette.action} />
// }
//# sourceMappingURL=accent-color.compositions.js.map