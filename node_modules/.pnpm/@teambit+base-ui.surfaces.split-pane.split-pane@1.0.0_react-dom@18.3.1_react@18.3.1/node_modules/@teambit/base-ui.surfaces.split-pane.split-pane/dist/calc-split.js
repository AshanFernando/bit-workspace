"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcSplit = void 0;
const base_ui_surfaces_split_pane_layout_1 = require("@teambit/base-ui.surfaces.split-pane.layout");
function calcSplit(snapshot, layout, defaultSize) {
    let splitSize = calcPixels(snapshot, layout, defaultSize);
    // update values to match `flex-direction: *-reverse`
    if (layout.includes(base_ui_surfaces_split_pane_layout_1.LayoutFeatures.reverse)) {
        splitSize.reverse();
    }
    if (splitSize[0] === undefined || splitSize[1] === undefined) {
        splitSize = autoCalcComplementary(splitSize);
    }
    return splitSize;
}
exports.calcSplit = calcSplit;
/**
 *
 * cheks in case one of the sizes is undefined
 */
function autoCalcComplementary([a, b]) {
    if (a === undefined && b === undefined)
        return [undefined, undefined];
    if (b === undefined) {
        return [a, calcComplemetSize(a)];
    }
    if (a === undefined) {
        return [calcComplemetSize(b), b];
    }
    return [a, b];
}
/**
 * @example
 * 20 -> calc(100% - 20px)
 * 20px -> calc(100% - 20px)
 * 20% -> 80%
 * '20' -> calc(100% - 20px)
 */
function calcComplemetSize(size) {
    if (size === undefined)
        return undefined;
    if (typeof size === 'number') {
        return `calc(100% - ${size}px)`;
    }
    if (size.endsWith('px')) {
        return `calc(100% - ${size})`;
    }
    if (size.endsWith('%')) {
        const sizeAsNumber = +size.replace('%', '');
        if (Number.isNaN(sizeAsNumber))
            return undefined;
        return `${100 - sizeAsNumber}%`; // check this works
    }
    if (!Number.isNaN(+size))
        return `calc(100% - ${size}px)`;
    return undefined;
}
function calcPixels(snapshot, layout, defaultSize) {
    const { row, column, first, last } = base_ui_surfaces_split_pane_layout_1.LayoutFeatures;
    const features = new Set(layout.split(' '));
    // show only top, left
    if (features.has(first)) {
        return ['100%', '0%'];
    }
    // show only bottom, right
    if (features.has(last)) {
        return ['0%', '100%'];
    }
    // horizontal
    if (features.has(row)) {
        if ((snapshot === null || snapshot === void 0 ? void 0 : snapshot.x) === undefined)
            return calcDefaultSize(defaultSize);
        if (typeof defaultSize === 'string' && defaultSize.endsWith('%')) {
            return [`${(100 * snapshot.x) / snapshot.width}%`, undefined];
        }
        return [snapshot.x, undefined];
    }
    // vertical:
    if (features.has(column)) {
        if ((snapshot === null || snapshot === void 0 ? void 0 : snapshot.y) === undefined)
            return calcDefaultSize(defaultSize);
        if (typeof defaultSize === 'string' && defaultSize.endsWith('%')) {
            return [`${(100 * snapshot.y) / snapshot.height}%`, undefined];
        }
        return [snapshot.y, undefined];
    }
    return [undefined, undefined];
}
/**
 * handles negative syntax (e.g. size="-200px")
 * @example "-200" -> [undefined, "200px"]
 * "-200px" -> [undefined, "200px"]
 * "200px" -> ["200px", undefined]
 * "100%" -> ["100%", undefined]
 * 100 -> [100, undefined]
 * -50 -> [undefined, 50]
 *
 */
function calcDefaultSize(defaultSize) {
    if (!defaultSize)
        return [undefined, undefined];
    if (typeof defaultSize === 'number' && defaultSize < 0) {
        return [undefined, -defaultSize];
    }
    if (typeof defaultSize === 'string' && defaultSize.startsWith('-')) {
        return [undefined, defaultSize.substring(1)];
    }
    return [defaultSize, undefined];
}
//# sourceMappingURL=calc-split.js.map