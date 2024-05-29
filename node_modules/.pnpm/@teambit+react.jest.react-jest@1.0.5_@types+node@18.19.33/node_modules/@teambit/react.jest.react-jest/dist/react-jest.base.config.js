const { baseConfig } = require('@teambit/defender.jest-tester');
module.exports = Object.assign(Object.assign({}, baseConfig), { testEnvironment: require.resolve('jest-environment-jsdom'), setupFiles: [require.resolve('react-app-polyfill/jsdom')], setupFilesAfterEnv: [require.resolve('./setupTests.js')] });
//# sourceMappingURL=react-jest.base.config.js.map