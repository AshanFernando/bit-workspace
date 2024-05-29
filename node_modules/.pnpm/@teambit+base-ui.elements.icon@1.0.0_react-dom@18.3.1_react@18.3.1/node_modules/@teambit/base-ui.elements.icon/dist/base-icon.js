"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseIcon = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
/**
 * Base template component for icons.
 * Compose this class to make a specific icon component for a font-set, like [bit-icon](https://bit.dev/bit/evangelist/atom/bit-icon).
 * @example
 * const iconset = "eva-icons";
 * const EvaButton = (props) => <BaseIcon {...props} of={`${iconset}-${props.of}`} />;
 */
function BaseIcon(_a) {
    var { of: iconName, className } = _a, rest = __rest(_a, ["of", "className"]);
    return react_1.default.createElement("span", Object.assign({ "data-bit-id": "teambit.base-ui/elements/icon", className: classnames_1.default(iconName, className) }, rest));
}
exports.BaseIcon = BaseIcon;
//# sourceMappingURL=base-icon.js.map