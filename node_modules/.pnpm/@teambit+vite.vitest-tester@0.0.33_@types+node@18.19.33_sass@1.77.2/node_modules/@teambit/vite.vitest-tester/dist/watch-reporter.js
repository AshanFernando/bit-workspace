"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reporters_1 = require("vitest/reporters");
class WatchReporter extends reporters_1.DefaultReporter {
    constructor(onFinished) {
        super();
        this.onFinished = onFinished;
    }
}
exports.default = WatchReporter;
//# sourceMappingURL=watch-reporter.js.map