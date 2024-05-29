import { ComponentContext } from "@teambit/generator";

export function specFile(context: ComponentContext) {
  return {
    relativePath: `${context.name}.spec.tsx`,
    content: `import React from 'react';
import { render } from '@testing-library/react';
import { Basic${context.namePascalCase} } from './${context.name}.composition.js';

it('renders with the correct text', () => {
  const { getByText } = render(<Basic${context.namePascalCase} />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
`
  }
}
