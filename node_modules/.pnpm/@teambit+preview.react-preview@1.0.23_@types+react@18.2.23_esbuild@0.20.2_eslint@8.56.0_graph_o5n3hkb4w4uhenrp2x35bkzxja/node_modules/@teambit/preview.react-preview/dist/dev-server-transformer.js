"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDevServerTransformers = void 0;
const react_webpack_react_webpack_1 = require("@teambit/react.webpack.react-webpack");
function createDevServerTransformers(context, workspace) {
    var _a;
    const baseConfig = (0, react_webpack_react_webpack_1.configBaseFactory)(false);
    const baseDevConfig = (0, react_webpack_react_webpack_1.configBaseDevFactory)({
        workspaceDir: workspace.path,
    });
    const envDevConfig = (0, react_webpack_react_webpack_1.configEnvDevFactory)({ envId: context.id });
    const componentDevConfig = (0, react_webpack_react_webpack_1.configComponentDevFactory)({
        envId: context.id,
        componentPathsRegExps: (_a = workspace === null || workspace === void 0 ? void 0 : workspace.getComponentPathsRegExps()) !== null && _a !== void 0 ? _a : [],
    });
    const defaultTransformer = (configMutator) => {
        const merged = configMutator.merge([
            baseConfig,
            baseDevConfig,
            envDevConfig,
            componentDevConfig,
        ]);
        return merged;
    };
    return defaultTransformer;
}
exports.createDevServerTransformers = createDevServerTransformers;
//# sourceMappingURL=dev-server-transformer.js.map