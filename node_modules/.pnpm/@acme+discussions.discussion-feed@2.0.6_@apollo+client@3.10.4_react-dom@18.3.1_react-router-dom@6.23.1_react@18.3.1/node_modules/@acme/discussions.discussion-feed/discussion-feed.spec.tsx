import { render } from '@testing-library/react';
import { BasicDiscussionFeed } from './discussion-feed.composition.js';

it('should render with text from the mock', () => {
  const { getByText } = render(<BasicDiscussionFeed />);
  const rendered = getByText('Hello everyone!');
  expect(rendered).toBeTruthy();
});
