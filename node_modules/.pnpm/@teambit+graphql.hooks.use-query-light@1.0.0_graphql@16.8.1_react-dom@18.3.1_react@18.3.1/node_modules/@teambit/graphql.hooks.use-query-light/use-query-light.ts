import { useEffect, useState, useRef } from 'react';
import { request } from 'graphql-request';
import { useDeepCompareMemo } from 'use-deep-compare';
import { useQueryServer } from './server-context';

export { gql } from 'graphql-request';

type Primitive = number | string | boolean;
export type Variables = {
  [key: string]: Primitive | Primitive[] | Variables | Variables[];
};
export type UseQueryOptions = {
  variables?: Variables;
  server?: string;
  headers?: string[][] | Record<string, string>;
};
type GqlState<T> = {
  data?: T;
  loading: boolean;
  error?: any;
};

export function useQuery<T = any>(
  query: string,
  { variables, server, headers }: UseQueryOptions = {}
) {
  const mountedRef = useRef(true);
  const [state, setState] = useState<GqlState<T>>({ loading: false });

  const stableVariables = useDeepCompareMemo(() => variables, [variables]);
  const ctxServer = useQueryServer();

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const controller = createAborter();
    setState((obj) => ({ ...obj, loading: true, error: undefined }));

    request({
      url: server || ctxServer,
      document: query,
      variables: stableVariables,
      requestHeaders: headers,
      // @ts-ignore
      signal: controller?.signal,
    })
      .then((result: T) => {
        if (mountedRef.current)
          setState((obj) => ({ ...obj, data: result, loading: false }));
      })
      .catch((e: any) => {
        const isAborted =
          e &&
          (e.type === 'aborted' ||
            e.message.toLowerCase?.() === 'aborted' ||
            e.name.toLowerCase?.() === 'aborterror');

        if (mountedRef.current)
          setState((obj) => ({
            ...obj,
            error: isAborted ? undefined : e,
            loading: false,
          }));
      });

    return () => {
      controller?.abort();
    };
  }, [query, stableVariables]);

  return state;
}

function createAborter() {
  if (typeof AbortController === 'undefined') return undefined;

  return new AbortController();
}
