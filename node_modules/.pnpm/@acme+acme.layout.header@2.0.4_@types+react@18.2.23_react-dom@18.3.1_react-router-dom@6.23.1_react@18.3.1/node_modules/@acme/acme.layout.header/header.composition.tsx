import { MockProvider } from '@acme/acme.testing.mock-provider';
import { Header } from './header.js';

export const BasicHeader = () => {
  return (
    // create an env to apply providers on all of your compositions
    // learn more: https://bit.dev/docs/react-env/component-previews
    <MockProvider>
      <Header />
    </MockProvider>
  );
}
