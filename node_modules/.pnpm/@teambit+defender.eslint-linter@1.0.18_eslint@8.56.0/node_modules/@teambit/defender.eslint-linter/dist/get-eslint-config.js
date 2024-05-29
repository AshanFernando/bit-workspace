"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRuntimeEslintConfig = exports.computeEslintConfig = void 0;
const lodash_1 = require("lodash");
const missing_eslint_config_1 = require("./exceptions/missing-eslint-config");
function computeEslintConfig({ configPath, config, extensions, pluginsPath, }) {
    if (!config && !configPath) {
        throw new missing_eslint_config_1.MissingEslintConfig();
    }
    if (config)
        return config;
    const eslintConfigContent = configPath
        // eslint-disable-next-line import/no-dynamic-require,global-require
        ? require(configPath)
        : undefined;
    return {
        overrideConfig: eslintConfigContent,
        extensions,
        useEslintrc: false,
        cwd: pluginsPath,
    };
}
exports.computeEslintConfig = computeEslintConfig;
function computeRuntimeEslintConfig(options, context, tsConfigPath) {
    const runtimeOptions = {
        fix: !!context.fix,
        fixTypes: context.fixTypes,
    };
    const withFix = Object.assign(Object.assign({}, options), runtimeOptions);
    (0, lodash_1.set)(withFix, 'overrideConfig.parserOptions.project', tsConfigPath);
    return withFix;
}
exports.computeRuntimeEslintConfig = computeRuntimeEslintConfig;
//# sourceMappingURL=get-eslint-config.js.map