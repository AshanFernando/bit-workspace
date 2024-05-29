import cjsConfig from './react-jest.cjs.config';
import esmConfig from './react-jest.esm.config';
import jestConfig from './jest.config';

export * from './transformers';
export { cjsConfig, esmConfig };

export default jestConfig;
