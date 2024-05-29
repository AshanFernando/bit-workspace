import React from 'react';
import { render } from '@testing-library/react';
import { BasicMockProvider } from './mock-provider.composition.js';

it('should the children in the mock providers', () => {
  const { findByText } = render(<BasicMockProvider />);
  const rendered = findByText('hello world!');
  expect(rendered).toBeTruthy();
});
