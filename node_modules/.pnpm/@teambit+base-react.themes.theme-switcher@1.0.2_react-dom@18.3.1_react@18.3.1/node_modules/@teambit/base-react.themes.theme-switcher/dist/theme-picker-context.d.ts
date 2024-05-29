import { ComponentType } from 'react';
export declare type ThemeOption<ExtraProps = {}> = ComponentType<ExtraProps> & {
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
export declare type ThemePicker<ExtraProps = {}> = {
    /**
     * current theme in use.
     */
    current?: ThemeOption<ExtraProps>;
    currentIdx: number;
    /**
     * theme options.
     */
    options: ThemeOption<ExtraProps>[];
    /**
     * set a theme.
     */
    setTheme: (option: ThemeOption<ExtraProps>) => void;
};
export declare const ThemePickerContext: import("react").Context<ThemePicker<any>>;
export declare function useThemePicker(): ThemePicker<any>;
export declare function useThemeByName(themeName?: string): ThemeOption<any>;
export declare function useNextTheme(): () => void;
