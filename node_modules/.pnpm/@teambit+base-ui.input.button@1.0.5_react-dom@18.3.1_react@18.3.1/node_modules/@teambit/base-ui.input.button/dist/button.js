"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
// //@ts-ignore
// import Spinner from '@bit/bit.base-ui.ellipsis';
const button_module_scss_1 = __importDefault(require("./button.module.scss"));
const base_ui_elements_dots_loader_1 = require("@teambit/base-ui.elements.dots-loader");
/**
 * Base button, with very basic styles. Accepts all parameters of native html button.
 *
 * If onClick returns a promise, BaseButton will show a loader automatically, until the promise is resolved or rejected.
 * @example
 * <Button onClick={() => api.submitUserData()} loader={<CustomLoader/> } />
 */
class Button extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = { isLoading: false };
        this.activePromises = new Set();
        this.unmounted = false;
        this.handleClick = (event) => {
            const { onClick } = this.props;
            if (!onClick)
                return;
            this.setState({ isLoading: true });
            const promise = Promise.resolve(onClick.call(this, event)).catch(() => { });
            this.activePromises.add(promise);
            promise.then(() => this.handleResolve(promise));
        };
    }
    componentWillUnmount() {
        this.unmounted = true;
        this.activePromises = new Set();
    }
    handleResolve(p) {
        if (this.unmounted)
            return;
        this.activePromises.delete(p);
        if (this.activePromises.size === 0) {
            this.setState({ isLoading: false });
        }
    }
    render() {
        const _a = this.props, { onClick, className, children, loader, loading, disabled, activeWhenLoading = false } = _a, rest = __rest(_a, ["onClick", "className", "children", "loader", "loading", "disabled", "activeWhenLoading"]);
        // ignore internal state when component is controlled
        const isLoading = (loading !== undefined && loading) || this.state.isLoading;
        const content = isLoading ? loader : children;
        const disabledByLoading = isLoading && !activeWhenLoading;
        return (react_1.default.createElement("button", Object.assign({ "data-bit-id": "teambit.base-ui/input/button" }, rest, { disabled: disabled || disabledByLoading, onClick: this.handleClick, className: (0, classnames_1.default)(className, button_module_scss_1.default.vanillaButton) }), content));
    }
}
exports.default = Button;
Button.defaultProps = {
    loader: react_1.default.createElement(base_ui_elements_dots_loader_1.DotsLoader, null),
    loading: false,
};
//# sourceMappingURL=button.js.map