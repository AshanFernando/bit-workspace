import { ComponentContext } from '@teambit/generator';

export const compositionFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.composition.tsx`,
    content: `import { ${Name} } from './${name}.js';

export const Basic${Name} = () => {
  return (
    <${Name}>hello world!</${Name}>
  );
}
`,
  };
};
