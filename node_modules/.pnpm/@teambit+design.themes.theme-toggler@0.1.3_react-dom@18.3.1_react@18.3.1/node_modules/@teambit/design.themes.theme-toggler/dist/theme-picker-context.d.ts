import { ComponentType } from 'react';
import type { BaseThemeProps } from '@teambit/design.themes.base-theme';
export declare type ThemeOption = ComponentType<BaseThemeProps> & {
    /**
     * icon of the theme.
     */
    Icon?: ComponentType<{
        className: string;
        onClick: () => void;
    }>;
    /**
     * name of the theme.
     */
    themeName?: string;
};
export declare type ThemePicker = {
    /**
     * current theme in use.
     */
    current?: ThemeOption;
    /**
     * theme options.
     */
    options: ThemeOption[];
    /**
     * set a theme.
     */
    setTheme: (option: ThemeOption) => void;
};
export declare const ThemePickerContext: import("react").Context<ThemePicker>;
