const baseConfig = require('./react-jest.base.config');
const { cjsConfig } = require('@teambit/defender.jest-tester');
const cjsTransformer = require.resolve('./transformers/cjs-transformer.js');
const cjsTransform = Object.assign(Object.assign({}, cjsConfig.transform), { '^.+\\.(js|jsx|ts|tsx|cjs)$': cjsTransformer });
const finalCjsConfig = Object.assign(Object.assign(Object.assign({}, baseConfig), cjsConfig), { transform: cjsTransform });
module.exports = finalCjsConfig;
//# sourceMappingURL=react-jest.cjs.config.js.map