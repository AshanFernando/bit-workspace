"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundnessClass = void 0;
const roundness_module_scss_1 = __importDefault(require("./roundness.module.scss"));
__exportStar(require("./roundness-values"), exports);
exports.roundnessClass = {
    circle: roundness_module_scss_1.default.circle,
    default: roundness_module_scss_1.default.default,
    small: roundness_module_scss_1.default.small,
    medium: roundness_module_scss_1.default.medium,
    sharp: roundness_module_scss_1.default.sharp,
};
//# sourceMappingURL=index.js.map