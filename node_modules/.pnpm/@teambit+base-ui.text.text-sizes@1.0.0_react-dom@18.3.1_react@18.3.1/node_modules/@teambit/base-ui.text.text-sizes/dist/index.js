"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.textSize = void 0;
const text_sizes_module_scss_1 = __importDefault(require("./text-sizes.module.scss"));
const sizes = {
    /**
     * @default 12px
     */
    xxs: text_sizes_module_scss_1.default.xxs,
    /**
     * @default 14px
     */
    xs: text_sizes_module_scss_1.default.xs,
    /**
     * @default 15px
     */
    sm: text_sizes_module_scss_1.default.sm,
    /**
     * @default 16px
     */
    md: text_sizes_module_scss_1.default.md,
    /**
     * @default 18px
     */
    lg: text_sizes_module_scss_1.default.lg,
    /**
     * @default 20px
     */
    xl: text_sizes_module_scss_1.default.xl,
    /**
     * @default 24px
     */
    xxl: text_sizes_module_scss_1.default.xxl,
};
exports.textSize = sizes;
//# sourceMappingURL=index.js.map