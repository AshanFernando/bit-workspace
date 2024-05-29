export { gql } from 'graphql-request';
declare type Primitive = number | string | boolean;
export declare type Variables = {
    [key: string]: Primitive | Primitive[] | Variables | Variables[];
};
export declare type UseQueryOptions = {
    variables?: Variables;
    server?: string;
    headers?: string[][] | Record<string, string>;
};
declare type GqlState<T> = {
    data?: T;
    loading: boolean;
    error?: any;
};
export declare function useQuery<T = any>(query: string, { variables, server, headers }?: UseQueryOptions): GqlState<T>;
