"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingScope = void 0;
class MissingScope extends Error {
    constructor(src) {
        super(`scope was not defined directly or by "${src}"`);
    }
    report() {
        return this.message;
    }
}
exports.MissingScope = MissingScope;
//# sourceMappingURL=missing-scope.js.map