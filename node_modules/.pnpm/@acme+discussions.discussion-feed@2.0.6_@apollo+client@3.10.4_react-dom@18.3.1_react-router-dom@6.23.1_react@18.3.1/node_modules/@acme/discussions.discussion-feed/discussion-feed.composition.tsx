import { MockProvider } from '@acme/acme.testing.mock-provider';
import { DiscussionFeed } from './discussion-feed.js';  

export const BasicDiscussionFeed = () => {
  return (
    // create an env to apply providers on all of your compositions
    // learn more: https://bit.dev/docs/react-env/component-previews
    <MockProvider>
      <DiscussionFeed />
    </MockProvider>
  );
};
