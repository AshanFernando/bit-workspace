"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDragTracker = void 0;
const react_1 = require("react");
const to_relative_position_1 = require("./to-relative-position");
const use_pointer_drag_1 = require("./use-pointer-drag");
function useDragTracker(containerRef) {
    const [snapshot, setSnapshot] = react_1.useState(undefined);
    // TODO - resize observer
    const handleDrag = react_1.useCallback(({ clientX, clientY }) => {
        if (!containerRef.current)
            return;
        const position = to_relative_position_1.toRelativePosition({
            clientX,
            clientY,
            element: containerRef.current,
        });
        setSnapshot(position);
    }, [containerRef]);
    const [isDragging, setDragging] = use_pointer_drag_1.useDragListener(handleDrag);
    return [snapshot, isDragging, setDragging];
}
exports.useDragTracker = useDragTracker;
//# sourceMappingURL=use-drag-tracker.js.map