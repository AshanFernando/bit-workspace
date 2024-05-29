"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanizeCompositionId = void 0;
const humanize_string_1 = __importDefault(require("humanize-string"));
function humanizeCompositionId(rawId) {
    return (0, humanize_string_1.default)(rawId);
}
exports.humanizeCompositionId = humanizeCompositionId;
//# sourceMappingURL=humanize.js.map