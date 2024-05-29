"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Composer = void 0;
const react_1 = __importDefault(require("react"));
/**
 * A react Component composer, equivalent to `Compose(n+1) := <a[n+1]> <Compose(n) /> </a[n+1]>`.
 * Component can be a React Component, or a `[ Component, { props } ]` tuple.
 */
function Composer(props) {
    const { components = [], children } = props;
    const arrayified = components.map((tuple) => Array.isArray(tuple) ? tuple : [tuple, undefined]);
    return (react_1.default.createElement(react_1.default.Fragment, null, arrayified.reduceRight((acc, [Comp, forwardProps]) => {
        return react_1.default.createElement(Comp, Object.assign({}, forwardProps), acc);
    }, children)));
}
exports.Composer = Composer;
//# sourceMappingURL=composer.js.map