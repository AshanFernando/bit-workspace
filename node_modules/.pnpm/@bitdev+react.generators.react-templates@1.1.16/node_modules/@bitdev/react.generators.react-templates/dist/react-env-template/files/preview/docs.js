"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mounterFile = void 0;
const mounterFile = () => {
    return {
        relativePath: './preview/mounter.tsx',
        content: `import React from 'react';
import { createDocsTemplate } from '@teambit/docs.docs-template';

/**
 * customize the bit documentation template or
 * replace this with one of your own.
 */
export default createDocsTemplate();
`,
    };
};
exports.mounterFile = mounterFile;
//# sourceMappingURL=docs.js.map