"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTransformers = exports.runTransformers = void 0;
const webpack_1 = require("@teambit/webpack");
function runTransformers(config, transformers = [], 
// context: WebpackConfigTransformContext | WebpackConfigDevServerTransformContext
context) {
    if (!Array.isArray(transformers))
        return config;
    const newConfig = transformers.reduce((acc, transformer) => transformer(acc, context), config);
    return newConfig;
}
exports.runTransformers = runTransformers;
function generateTransformers(logger, _bundlerContext, devServerContext, target) {
    const transformers = [];
    // TODO: handle dev server
    const hostDeps = (target === null || target === void 0 ? void 0 : target.hostDependencies) || (devServerContext === null || devServerContext === void 0 ? void 0 : devServerContext.hostDependencies);
    if (hostDeps) {
        if ((target === null || target === void 0 ? void 0 : target.aliasHostDependencies) ||
            (devServerContext === null || devServerContext === void 0 ? void 0 : devServerContext.aliasHostDependencies)) {
            const peerAliasesTransformer = (0, webpack_1.generateAddAliasesFromPeersTransformer)(hostDeps, logger);
            transformers.push(peerAliasesTransformer);
        }
        if ((target === null || target === void 0 ? void 0 : target.externalizeHostDependencies) ||
            (devServerContext === null || devServerContext === void 0 ? void 0 : devServerContext.externalizeHostDependencies)) {
            const externalsTransformer = (0, webpack_1.generateExternalsTransformer)(hostDeps);
            transformers.push(externalsTransformer);
        }
    }
    return transformers;
}
exports.generateTransformers = generateTransformers;
//# sourceMappingURL=transformers.js.map