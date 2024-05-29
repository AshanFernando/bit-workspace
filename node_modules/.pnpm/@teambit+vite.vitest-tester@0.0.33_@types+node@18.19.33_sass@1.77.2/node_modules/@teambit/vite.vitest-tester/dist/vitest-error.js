"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VitestError = void 0;
class VitestError extends Error {
    constructor(message, stack, code, type) {
        super(message);
        this.stack = stack;
        this.code = code;
        this.type = type;
    }
}
exports.VitestError = VitestError;
//# sourceMappingURL=vitest-error.js.map