import { ComponentContext } from '@teambit/generator';

export const docsFile = (context: ComponentContext) => {
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
