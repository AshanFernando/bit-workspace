/// <reference types="react" />
import { Anchor } from './anchor';
import { H5 } from "@teambit/documenter.ui.heading";
export declare const labels: string[];
export declare const examples: {
    scope: {
        Anchor: typeof Anchor;
        H5: typeof H5;
        ThemeCompositions: ({ children, ...rest }: import("react").HTMLAttributes<HTMLDivElement>) => JSX.Element;
    };
    title: string;
    description: string;
    code: string;
}[];
