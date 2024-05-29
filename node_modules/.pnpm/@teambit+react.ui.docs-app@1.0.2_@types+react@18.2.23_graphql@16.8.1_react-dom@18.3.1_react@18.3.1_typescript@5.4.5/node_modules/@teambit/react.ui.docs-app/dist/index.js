"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.docsStyles = exports.DocsApp = exports.default = exports.DocsTheme = void 0;
var docs_theme_1 = require("./docs-theme");
Object.defineProperty(exports, "DocsTheme", { enumerable: true, get: function () { return docs_theme_1.DocsTheme; } });
var docs_app_root_1 = require("./docs.app-root");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(docs_app_root_1).default; } });
var docs_app_1 = require("./docs-app");
Object.defineProperty(exports, "DocsApp", { enumerable: true, get: function () { return docs_app_1.DocsApp; } });
var docs_app_module_scss_1 = require("./docs-app.module.scss");
Object.defineProperty(exports, "docsStyles", { enumerable: true, get: function () { return __importDefault(docs_app_module_scss_1).default; } });
//# sourceMappingURL=index.js.map