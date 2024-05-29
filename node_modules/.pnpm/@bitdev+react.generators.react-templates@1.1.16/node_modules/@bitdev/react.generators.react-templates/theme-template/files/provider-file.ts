import { ComponentContext } from "@teambit/generator";

export function providerFile(context: ComponentContext) {
  return {
    relativePath: `${context.name}-provider.tsx`,
    content: `import { createTheme } from '@teambit/base-react.themes.theme-provider';
import { ${context.namePascalCase}Schema, ${context.nameCamelCase}Tokens } from './${context.name}-tokens.js';

/**
 * creating and declaring the ${context.name} theme.
 * define the theme schema as a type variable for proper type completions.
 */
export const ${context.namePascalCase}Provider = createTheme<${context.namePascalCase}Schema>({
  theme: ${context.nameCamelCase}Tokens,
});

/**
 * a react hook for contextual access to design token
 * from components.
 */
export const { useTheme } = ${context.namePascalCase}Provider;
`
  }
}
