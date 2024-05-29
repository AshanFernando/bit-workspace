"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRelativePosition = void 0;
const limit_1 = require("./limit");
function toRelativePosition({ clientX, clientY, element, }) {
    const boundingRect = element.getBoundingClientRect();
    const { left, top, width = 1, height = 1 } = boundingRect;
    const x = limit_1.limit(clientX - left, 0, width);
    const y = limit_1.limit(clientY - top, 0, height);
    return {
        x,
        y,
        width,
        height,
    };
}
exports.toRelativePosition = toRelativePosition;
//# sourceMappingURL=to-relative-position.js.map