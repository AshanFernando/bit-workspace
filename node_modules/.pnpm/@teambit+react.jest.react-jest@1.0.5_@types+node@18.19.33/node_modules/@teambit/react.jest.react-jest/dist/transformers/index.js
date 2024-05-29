"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.esmPresets = exports.esmPlugins = exports.cjsPresets = exports.cjsPlugins = exports.basePresets = void 0;
var base_transformer_presets_1 = require("./base-transformer-presets");
Object.defineProperty(exports, "basePresets", { enumerable: true, get: function () { return base_transformer_presets_1.basePresets; } });
var cjs_transformer_1 = require("./cjs-transformer");
Object.defineProperty(exports, "cjsPlugins", { enumerable: true, get: function () { return cjs_transformer_1.cjsPlugins; } });
Object.defineProperty(exports, "cjsPresets", { enumerable: true, get: function () { return cjs_transformer_1.cjsPresets; } });
var esm_transformer_1 = require("./esm-transformer");
Object.defineProperty(exports, "esmPlugins", { enumerable: true, get: function () { return esm_transformer_1.esmPlugins; } });
Object.defineProperty(exports, "esmPresets", { enumerable: true, get: function () { return esm_transformer_1.esmPresets; } });
//# sourceMappingURL=index.js.map