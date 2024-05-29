"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const base_ui_text_heading_1 = require("@teambit/base-ui.text.heading");
const heading_sizes_module_scss_1 = __importDefault(require("./heading-sizes.module.scss"));
const heading_module_scss_1 = __importDefault(require("./heading.module.scss"));
/**
 * A set of concrete heading for the workspace docs.
 * H1, H2, H3, H4, H5, H6.
 *
 * To keep a consistent look to the site, headers come in a limited set of sizes.
 * While each header corresponds to a default font-size, it can be overridden using the size prop:
 */
function H1(props) {
    return (react_1.default.createElement(base_ui_text_heading_1.Heading, Object.assign({ element: "h1" }, props, { className: (0, classnames_1.default)(heading_module_scss_1.default.h1, heading_sizes_module_scss_1.default[props.size || 'lg'], props.className) })));
}
exports.H1 = H1;
function H2(props) {
    return (react_1.default.createElement(base_ui_text_heading_1.Heading, Object.assign({ element: "h2" }, props, { className: (0, classnames_1.default)(heading_module_scss_1.default.h2, heading_sizes_module_scss_1.default[props.size || 'lg'], props.className) })));
}
exports.H2 = H2;
function H3(props) {
    return (react_1.default.createElement(base_ui_text_heading_1.Heading, Object.assign({ element: "h3" }, props, { className: (0, classnames_1.default)(heading_module_scss_1.default.h3, heading_sizes_module_scss_1.default[props.size || 'md'], props.className) })));
}
exports.H3 = H3;
function H4(props) {
    return (react_1.default.createElement(base_ui_text_heading_1.Heading, Object.assign({ element: "h4" }, props, { className: (0, classnames_1.default)(heading_module_scss_1.default.h4, heading_sizes_module_scss_1.default[props.size || 'sm'], props.className) })));
}
exports.H4 = H4;
function H5(props) {
    return (react_1.default.createElement(base_ui_text_heading_1.Heading, Object.assign({ element: "h5" }, props, { className: (0, classnames_1.default)(heading_module_scss_1.default.h5, heading_sizes_module_scss_1.default[props.size || 'xs'], props.className) })));
}
exports.H5 = H5;
function H6(props) {
    return (react_1.default.createElement(base_ui_text_heading_1.Heading, Object.assign({ element: "h6" }, props, { className: (0, classnames_1.default)(heading_module_scss_1.default.h6, heading_sizes_module_scss_1.default[props.size || 'xxs'], props.className) })));
}
exports.H6 = H6;
//# sourceMappingURL=heading.js.map