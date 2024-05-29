declare type Property = {
    name: string;
    description: string;
    required: boolean;
    type: string;
    default: {
        value: string;
    };
};
declare type DocsItem = {
    abstract: string;
    properties: Property[];
};
export declare function useFetchDocs(componentId: string): {
    data: {
        docs: DocsItem;
    };
    loading: boolean;
    error?: any;
};
export {};
