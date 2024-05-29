/// <reference types="react" />
import { Section } from "./section";
export declare const labels: string[];
export declare const examples: {
    scope: {
        Section: typeof Section;
        ThemeCompositions: ({ children, ...rest }: import("react").HTMLAttributes<HTMLDivElement>) => JSX.Element;
    };
    title: string;
    code: string;
}[];
