"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const humanize_1 = require("./humanize");
describe('humanize component id', () => {
    it('should space out camelCase', () => {
        const res = (0, humanize_1.humanizeCompositionId)('withManyItems');
        (0, chai_1.expect)(res).to.equal('With many items');
    });
});
//# sourceMappingURL=humanize.spec.js.map