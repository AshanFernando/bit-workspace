"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingEslintConfig = void 0;
const bit_error_1 = require("@teambit/bit-error");
class MissingEslintConfig extends bit_error_1.BitError {
    constructor() {
        super('eslint config not found. You must provide either a path to a valid `eslint config file` or set `config`');
    }
}
exports.MissingEslintConfig = MissingEslintConfig;
//# sourceMappingURL=missing-eslint-config.js.map