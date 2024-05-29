"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const docs_app_1 = require("./docs-app");
function DocsRoot({ componentId, docs, compositions, context }) {
    react_dom_1.default.render(react_1.default.createElement(docs_app_1.DocsApp, { componentId: componentId, docs: docs, compositions: compositions, context: context }), document.getElementById('root'));
}
// For backward compatibility - can be removed end of 2022
DocsRoot.apiObject = true;
exports.default = DocsRoot;
// hot reloading works when components are in a different file.
// do not declare react components here.
//# sourceMappingURL=docs.app-root.js.map