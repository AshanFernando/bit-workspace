import React from 'react';
import type { CreateThemeOptions } from './create-theme';
export declare type ThemeProviderProps<T> = {
    overrides?: Partial<T>;
} & React.HTMLAttributes<HTMLDivElement>;
export declare type ThemeProviderType<T> = React.ComponentType<ThemeProviderProps<T>>;
export declare function createThemeProvider<T>(ThemeContext: React.Context<T>, options: CreateThemeOptions<T>): ThemeProviderType<T>;
export declare function computeCssVars<T>(theme: T, prefix?: string): React.CSSProperties;
