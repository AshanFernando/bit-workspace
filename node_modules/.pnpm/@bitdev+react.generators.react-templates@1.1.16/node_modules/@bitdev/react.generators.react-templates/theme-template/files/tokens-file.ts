import { ComponentContext } from "@teambit/generator";


export function themeTokenFile(context: ComponentContext) {
  return {
    relativePath: `${context.name}-tokens.ts`,
    content: `
/**
 * ${context.namePascalCase} tokens.
 * Include all tokens in this object.
 */
export const ${context.nameCamelCase}Tokens = {
  /**
   * background color. use for primary surfaces across your design.
   */
  backgroundColor: '#f5f5f5',

  /**
   * color for general purpose text color. expected to mainly apply
   * on \`backgroundColor\`
   */
  textColor: 'black',

  /**
   * primary brand color. used for primary call to actions.
   * such as buttons, links, etc.
   */
  primaryColor: 'black',

  /**
   * color to use for borders.
   */
  borderColor: '#ededed',

  /**
   * color for secondary surfaces on the screen such 
   * as cards or content outlines.
   */
  surfaceColor: '#ffffff',
};

// create a theme type schema to allow new theme to override
// or implement a different theme variation like dark theme.
// in case tokens are dynamically loaded from a json file, please declare this variable an an interface.
export type ${context.namePascalCase}Schema = typeof ${context.nameCamelCase}Tokens;
`
  }
}