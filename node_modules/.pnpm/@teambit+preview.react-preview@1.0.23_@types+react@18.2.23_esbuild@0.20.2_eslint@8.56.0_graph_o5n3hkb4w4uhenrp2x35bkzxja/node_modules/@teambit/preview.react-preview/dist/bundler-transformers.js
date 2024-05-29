"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBundlerTransformers = void 0;
const react_webpack_react_webpack_1 = require("@teambit/react.webpack.react-webpack");
function createBundlerTransformers(context) {
    const baseConfig = (0, react_webpack_react_webpack_1.configBaseFactory)(!context.development);
    const componentConfig = (0, react_webpack_react_webpack_1.configComponentProdFactory)();
    const defaultTransformer = (configMutator) => {
        const merged = configMutator.merge([baseConfig, componentConfig]);
        return merged;
    };
    return defaultTransformer;
}
exports.createBundlerTransformers = createBundlerTransformers;
//# sourceMappingURL=bundler-transformers.js.map