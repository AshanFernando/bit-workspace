import React from 'react';
import { render } from '@testing-library/react';
import { BasicHeader } from './header.composition.js';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicHeader />);
  const rendered = getByText('Acme');
  expect(rendered).toBeTruthy();
});
