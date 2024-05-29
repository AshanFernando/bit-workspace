"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaFromPackageJson = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const find_root_1 = __importDefault(require("find-root"));
const component_id_1 = require("@teambit/component-id");
function metaFromPackageJson(filepath) {
    const root = safeFindRoot(filepath);
    if (!root)
        return undefined;
    const id = extractMetadata((0, path_1.join)(root, 'package.json'));
    return id;
}
exports.metaFromPackageJson = metaFromPackageJson;
function extractMetadata(pkgPath) {
    const pkg = parseJsonFile(pkgPath);
    if (!pkg)
        return undefined;
    const compId = pkg.componentId;
    const homepage = typeof pkg.homepage === 'string' ? pkg.homepage : undefined;
    const exported = pkg.exported !== false;
    if (!compId || !component_id_1.ComponentID.isValidObject(compId))
        return undefined;
    try {
        const parsed = component_id_1.ComponentID.fromObject(compId);
        return {
            id: parsed.toString(),
            homepage,
            exported,
        };
    }
    catch (_a) {
        return undefined;
    }
}
function parseJsonFile(pkgPath) {
    if (!(0, fs_1.existsSync)(pkgPath))
        return undefined;
    try {
        const content = (0, fs_1.readFileSync)(pkgPath, 'utf-8');
        const json = JSON.parse(content);
        return json;
    }
    catch (_a) {
        return undefined;
    }
}
function safeFindRoot(filepath) {
    try {
        return (0, find_root_1.default)(filepath);
    }
    catch (e) {
        // might happen for "scaffolding" files outside the project.
        return undefined;
    }
}
//# sourceMappingURL=meta-from-pkg-json.js.map