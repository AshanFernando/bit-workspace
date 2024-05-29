import { ThemeProviderType } from './create-theme-provider';
export declare type CreateThemeOptions<T> = {
    /**
     * theme object.
     */
    theme: T;
    /**
     * determine whether to render theme into css vars.
     */
    withoutCssVars?: boolean;
    /**
     * prefix to use for css vars. defaults to nothing.
     */
    prefix?: string;
};
/**
 * Type of a Theme instance.
 */
export declare type ThemeType<T> = {
    ThemeProvider: ThemeProviderType<T>;
    useTheme: () => T;
};
/**
 * create a new theme.
 */
export declare function createTheme<T>({ theme, prefix, withoutCssVars }: CreateThemeOptions<T>): ThemeType<T>;
export declare type ThemeProps<T> = {
    schema: T;
};
