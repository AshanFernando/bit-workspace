const baseConfig = require('./react-jest.base.config');
const { esmConfig } = require('@teambit/defender.jest-tester');
const esmTransformer = require.resolve('./transformers/esm-transformer.js');
const esmTransform = Object.assign(Object.assign({}, esmConfig.transform), { '^.+\\.(js|jsx|ts|tsx)$': esmTransformer });
const finalEsmConfig = Object.assign(Object.assign(Object.assign({}, baseConfig), esmConfig), { transform: esmTransform });
module.exports = finalEsmConfig;
//# sourceMappingURL=react-jest.esm.config.js.map