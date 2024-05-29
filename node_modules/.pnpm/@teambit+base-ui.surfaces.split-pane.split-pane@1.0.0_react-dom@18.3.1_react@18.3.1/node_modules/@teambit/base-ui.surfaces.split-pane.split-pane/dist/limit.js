"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.limit = void 0;
function limit(value, min, max) {
    if (min !== undefined && value < min)
        return min;
    if (max !== undefined && value > max)
        return max;
    return value;
}
exports.limit = limit;
//# sourceMappingURL=limit.js.map