/// <reference types="react" />
import type { BaseThemeProps } from '@teambit/design.themes.base-theme';
import { ThemeSwitcherProps as BaseProps } from '@teambit/base-react.themes.theme-switcher';
export declare type ThemeSwitcherProps = Omit<BaseProps<BaseThemeProps>, 'themes'> & {
    themes?: BaseProps<BaseThemeProps>['themes'];
};
export declare function ThemeSwitcher({ themes, ...props }: ThemeSwitcherProps): JSX.Element;
