export declare type Options = {
    exact?: boolean;
    strict?: boolean;
};
export declare function compareUrl(baseUrl: string, toMatchUrl: string, { exact, strict }?: Options): boolean;
