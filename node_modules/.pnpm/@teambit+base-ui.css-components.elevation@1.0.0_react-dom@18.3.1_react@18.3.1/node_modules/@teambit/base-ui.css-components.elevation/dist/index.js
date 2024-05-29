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
exports.elevationClass = void 0;
const elevations_module_scss_1 = __importDefault(require("./elevations.module.scss"));
__exportStar(require("./elevation-height"), exports);
exports.elevationClass = {
    low: elevations_module_scss_1.default.low,
    medium: elevations_module_scss_1.default.medium,
    high: elevations_module_scss_1.default.high,
    none: undefined,
};
//# sourceMappingURL=index.js.map