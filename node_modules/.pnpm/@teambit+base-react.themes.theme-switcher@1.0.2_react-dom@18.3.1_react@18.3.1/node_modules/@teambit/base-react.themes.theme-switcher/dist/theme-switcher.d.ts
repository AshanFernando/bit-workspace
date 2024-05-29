import { ReactNode } from 'react';
import { ThemeOption } from './theme-picker-context';
export declare type ThemeSwitcherProps<ExtraProps = {}> = ExtraProps & {
    children?: ReactNode;
    /** list of themes to toggle through */
    themes: ThemeOption<ExtraProps>[];
    /** explicit active theme. */
    activeTheme?: string | ThemeOption<ExtraProps>;
    /** handle theme changes (i.e from context) */
    handleThemeChange?: (theme: ThemeOption<ExtraProps>) => void;
    /** display name of the initial theme to use */
    defaultTheme?: string;
};
export declare function ThemeSwitcher<ExtraProps = {}>({ children, themes, activeTheme, handleThemeChange, defaultTheme, ...props }: ThemeSwitcherProps<ExtraProps>): JSX.Element;
