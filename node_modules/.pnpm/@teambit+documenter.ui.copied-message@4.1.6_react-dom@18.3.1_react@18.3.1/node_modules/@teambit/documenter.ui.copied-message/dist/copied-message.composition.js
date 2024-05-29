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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiddenCopiedMessageExample = exports.CopiedMessageExample = void 0;
const react_1 = __importStar(require("react"));
const copied_message_1 = require("./copied-message");
const evangelist_elements_icon_1 = require("@teambit/evangelist.elements.icon");
const documenter_ui_heading_1 = require("@teambit/documenter.ui.heading");
const CopiedMessageExample = () => {
    return (react_1.default.createElement("div", { style: { position: 'relative', paddingLeft: 50, height: 20 } },
        react_1.default.createElement(copied_message_1.CopiedMessage, { show: true })));
};
exports.CopiedMessageExample = CopiedMessageExample;
const HiddenCopiedMessageExample = () => {
    const [isCopied, setIsCopied] = (0, react_1.useState)(false);
    const handleClick = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };
    return (react_1.default.createElement("div", { style: { position: 'relative' } },
        react_1.default.createElement(documenter_ui_heading_1.H5, null, "Click icon to copy"),
        react_1.default.createElement(evangelist_elements_icon_1.Icon, { onClick: handleClick, of: "copy-cmp", style: { marginRight: 60, cursor: 'pointer' } }),
        react_1.default.createElement(copied_message_1.CopiedMessage, { show: isCopied })));
};
exports.HiddenCopiedMessageExample = HiddenCopiedMessageExample;
//# sourceMappingURL=copied-message.composition.js.map