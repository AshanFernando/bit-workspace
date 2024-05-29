"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useContextFile = void 0;
const useContextFile = (context) => {
    const { name, namePascalCase: Name } = context;
    return {
        relativePath: `use-${name}.tsx`,
        content: `import { useContext } from 'react';
import { ${Name}Context } from './${name}-context';

export const use${Name} = () => useContext(${Name}Context);
`,
    };
};
exports.useContextFile = useContextFile;
//# sourceMappingURL=use-context.js.map