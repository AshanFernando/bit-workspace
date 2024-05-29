import { MockProvider } from '@acme/acme.testing.mock-provider';

export const AcmeWebBasic = () => {
  return (
    // create an env to apply providers on all of your compositions
    // learn more: https://bit.dev/docs/react-env/component-previews
    <MockProvider noTheme></MockProvider>
  );
};
