import { ReactNode } from 'react';
import { BaseThemeProps } from '@teambit/design.themes.base-theme';
import { LightThemeIcon } from './light-theme.icon';
export declare type LightThemeProps = {
    children?: ReactNode;
};
export declare const lightThemeValues: import("@teambit/design.themes.base-theme").BaseThemeSchema;
export declare function LightTheme(props: BaseThemeProps): JSX.Element;
export declare namespace LightTheme {
    var Icon: typeof LightThemeIcon;
    var themeName: string;
}
