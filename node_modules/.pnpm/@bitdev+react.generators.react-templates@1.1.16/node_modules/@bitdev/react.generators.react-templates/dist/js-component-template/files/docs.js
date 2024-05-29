"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docsFile = void 0;
const docsFile = (context) => {
    const { name, namePascalCase: Name } = context;
    return {
        relativePath: `${name}.docs.mdx`,
        content: `---
description: A ${Name} component.
---

import { ${Name} } from './${name}';

### Component usage
\`\`\`js
<${Name}>Hello world!</${Name}>
\`\`\`

### Render hello world!

\`\`\`js live
<${Name}>Hello world!</${Name}>
\`\`\`
`,
    };
};
exports.docsFile = docsFile;
//# sourceMappingURL=docs.js.map