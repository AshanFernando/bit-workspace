import { ComponentContext } from "@teambit/generator";


export function themeStyles(context: ComponentContext) {
  return {
    relativePath: `${context.name}.module.scss`,
    content: `
.${context.nameCamelCase} {
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--background-color);
}
`
  }
}
