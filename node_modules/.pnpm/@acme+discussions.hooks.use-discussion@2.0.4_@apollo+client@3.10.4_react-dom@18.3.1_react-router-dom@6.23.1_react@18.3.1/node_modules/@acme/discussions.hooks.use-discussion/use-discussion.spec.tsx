import { renderHook } from '@testing-library/react';
import { MockProvider } from '@acme/acme.testing.mock-provider';
import { useDiscussionList } from './use-discussion.js';

it('should return two discussions', () => {
  const { result } = renderHook(() => useDiscussionList(), { wrapper: MockProvider });
  expect(result.current?.length).toBe(2);
});
