"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildStepPalette = void 0;
const accent_color_module_scss_1 = __importDefault(require("./accent-color.module.scss"));
exports.buildStepPalette = {
    success: accent_color_module_scss_1.default.success,
    failure: accent_color_module_scss_1.default.impulsive,
    pending: accent_color_module_scss_1.default.neutral,
    processing: accent_color_module_scss_1.default.process,
    skipped: accent_color_module_scss_1.default.hungry,
    unknown: accent_color_module_scss_1.default.neutral,
    // prefer lowercase
    SUCCESS: accent_color_module_scss_1.default.success,
    FAILURE: accent_color_module_scss_1.default.impulsive,
    PENDING: accent_color_module_scss_1.default.neutral,
    PROCESSING: accent_color_module_scss_1.default.process,
    SKIPPED: accent_color_module_scss_1.default.hungry,
    UNKNOWN: accent_color_module_scss_1.default.neutral,
};
//# sourceMappingURL=build-step-accents.js.map