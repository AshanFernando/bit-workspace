"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docsFile = void 0;
const docsFile = (context) => {
    const { name, namePascalCase: Name } = context;
    const displayName = name.replace(/-/g, ' ');
    return {
        relativePath: `${name}.docs.mdx`,
        content: `---
description: A ${Name} component.
---

import { ${Name} } from './${name}';

## Basic usage

Use the ${displayName} component:

\`\`\`js
<${Name} />
\`\`\`

### Display the text

\`\`\`js live
<${Name}>Hello world!</${Name}>
\`\`\`
`,
    };
};
exports.docsFile = docsFile;
//# sourceMappingURL=docs.js.map