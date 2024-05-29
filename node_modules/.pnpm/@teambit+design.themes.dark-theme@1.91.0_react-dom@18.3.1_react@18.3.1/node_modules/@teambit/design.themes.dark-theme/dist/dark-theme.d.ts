/// <reference types="react" />
import { BaseThemeProps } from '@teambit/design.themes.base-theme';
import { DarkThemeIcon } from './dark-theme.icon';
export declare type DarkThemeProps = BaseThemeProps;
export declare function DarkTheme(props: DarkThemeProps): JSX.Element;
export declare namespace DarkTheme {
    var Icon: typeof DarkThemeIcon;
    var themeName: string;
}
