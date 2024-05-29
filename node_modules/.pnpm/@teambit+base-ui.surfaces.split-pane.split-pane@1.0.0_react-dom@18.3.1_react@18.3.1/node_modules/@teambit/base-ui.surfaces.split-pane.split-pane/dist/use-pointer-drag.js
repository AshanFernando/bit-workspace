"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDragListener = void 0;
const react_1 = require("react");
function useDragListener(onDrag) {
    const draggingState = react_1.useState(false);
    const [isDragging, setDragging] = draggingState;
    react_1.useEffect(() => {
        const handleTouchMove = (e) => {
            const { touches } = e;
            const mainTouch = touches[0];
            onDrag(mainTouch);
        };
        const handleMouseMove = (e) => {
            onDrag(e);
        };
        const handleDragEnded = () => {
            setDragging(false);
        };
        const handleMouseEnter = (e) => {
            // mouse has left the screen, and returned, still holding the left-button
            if (e && e.buttons === 1)
                return;
            handleDragEnded();
        };
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleDragEnded);
            document.addEventListener('mouseenter', handleMouseEnter);
            document.addEventListener('touchend', handleDragEnded);
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchcancel', handleDragEnded);
        }
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleDragEnded);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('touchend', handleDragEnded);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchcancel', handleDragEnded);
        };
    }, [isDragging, onDrag]);
    return draggingState;
}
exports.useDragListener = useDragListener;
//# sourceMappingURL=use-pointer-drag.js.map