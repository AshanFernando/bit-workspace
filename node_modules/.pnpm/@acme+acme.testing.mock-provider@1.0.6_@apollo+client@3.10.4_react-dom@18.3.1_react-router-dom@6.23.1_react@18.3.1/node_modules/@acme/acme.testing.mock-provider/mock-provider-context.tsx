import { createContext } from 'react';

/**
 * context for the running in mock mode.
 */
export const MockContext = createContext<boolean>(false);
