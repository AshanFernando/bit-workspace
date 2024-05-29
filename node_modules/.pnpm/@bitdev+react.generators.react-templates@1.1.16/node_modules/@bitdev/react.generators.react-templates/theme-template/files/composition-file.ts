import { ComponentContext } from "@teambit/generator";

export function themeCompositionFile(context: ComponentContext) {
  return {
    relativePath: `${context.name}.composition.tsx`,
    content: `import { ${context.namePascalCase} } from './${context.name}.js';

export const Basic${context.namePascalCase} = () => {
  return <${context.namePascalCase}>hello world!</${context.namePascalCase}>;
};

export const ThemeUsage = () => {
  return (
    <${context.namePascalCase}>
      <div style={{ backgroundColor: 'var(--background-color)' }}>
        theme example content
      </div>
    </${context.namePascalCase}>
  );
};        
`
  }
} 