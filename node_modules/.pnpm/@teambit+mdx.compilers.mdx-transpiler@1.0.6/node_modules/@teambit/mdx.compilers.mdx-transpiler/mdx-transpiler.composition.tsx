import React from 'react';
import JSONFormatter from 'json-formatter-js';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { compileSync } from './mdx-transpiler';

const mdxInput = `
  ---
  title: MDX Compiler
  labels: ['compiler', 'transpiler, 'mdx', 'node']
  description: Bit MDX format compiler/transpiler.
  ---

  import { compileSync } from './mdx-transpiler';

  The MDX transpiler enables the compilation of Bit-flavoured MDX files. That includes parsing-out and removing Bit's frontmatter properties (which are part of the Bit flavored MDX) from the output code.
  In addition to that, the MDX transpiler creates a React context provider that wraps the entire JSX tree (produced by the MDX file) to make all imported modules available to be used by all instances of the live playground.
  This is an example of Bit flavoured MDX:

  # A markdown title
  `;

export const CompileSyncExample = () => {
  const result = compileSync(mdxInput, {
    bitFlavour: true,
  });
  const dataContent = new JSONFormatter(result, 2);
  return (
    <ThemeCompositions>
      <div>
        <div
          ref={(nodeElement) => {
            nodeElement && nodeElement.replaceWith(dataContent.render());
          }}
        />
      </div>
    </ThemeCompositions>
  );
};
