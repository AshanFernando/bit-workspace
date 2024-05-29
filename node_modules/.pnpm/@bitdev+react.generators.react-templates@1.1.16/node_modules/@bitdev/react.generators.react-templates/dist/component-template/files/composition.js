"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compositionFile = void 0;
const compositionFile = (context) => {
    const { name, namePascalCase: Name } = context;
    return {
        relativePath: `${name}.composition.tsx`,
        content: `import { ${Name} } from './${name}.js';

export const Basic${Name} = () => {
  return (
    <${Name}>hello world!</${Name}>
  );
}
`,
    };
};
exports.compositionFile = compositionFile;
//# sourceMappingURL=composition.js.map