"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.themedText = exports.ThemedText = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const themed_text_module_scss_1 = __importDefault(require("./themed-text.module.scss"));
/**
 * Text colored with the current base color.
 *
 * using css variable:
 * -   --bit-accent-color
 * @name ThemedText
 */
function ThemedText(props) {
    return (react_1.default.createElement("span", Object.assign({}, props, { className: classnames_1.default(props.className, themed_text_module_scss_1.default.themedText), "data-bit-id": "teambit.base-ui/text/themed-text" })));
}
exports.ThemedText = ThemedText;
/**
 * Same component as a pure-css class.
 * @name themedText
 */
exports.themedText = themed_text_module_scss_1.default.themedText;
//# sourceMappingURL=themed-text.js.map