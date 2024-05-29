import { createContext, useContext } from 'react';

const QueryServerCtx = createContext('/graphql');

export const QueryServerProvider = QueryServerCtx.Provider;
export const useQueryServer = () => useContext(QueryServerCtx);
