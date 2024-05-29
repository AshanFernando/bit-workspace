"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anchor = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const evangelist_elements_icon_1 = require("@teambit/evangelist.elements.icon");
const anchor_module_scss_1 = __importDefault(require("./anchor.module.scss"));
/**
 * An anchor component with an icon for linking your docs
 */
function Anchor(props) {
    const href = props.href && `#${props.href}`;
    return (react_1.default.createElement("a", Object.assign({}, props, { id: props.href, href: href, className: (0, classnames_1.default)(props.className, anchor_module_scss_1.default.anchor) }),
        react_1.default.createElement(evangelist_elements_icon_1.Icon, { of: "anchor", className: anchor_module_scss_1.default.anchorIcon })));
}
exports.Anchor = Anchor;
//# sourceMappingURL=anchor.js.map