"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.esmConfig = exports.cjsConfig = void 0;
const react_jest_cjs_config_1 = __importDefault(require("./react-jest.cjs.config"));
exports.cjsConfig = react_jest_cjs_config_1.default;
const react_jest_esm_config_1 = __importDefault(require("./react-jest.esm.config"));
exports.esmConfig = react_jest_esm_config_1.default;
const jest_config_1 = __importDefault(require("./jest.config"));
__exportStar(require("./transformers"), exports);
exports.default = jest_config_1.default;
//# sourceMappingURL=index.js.map