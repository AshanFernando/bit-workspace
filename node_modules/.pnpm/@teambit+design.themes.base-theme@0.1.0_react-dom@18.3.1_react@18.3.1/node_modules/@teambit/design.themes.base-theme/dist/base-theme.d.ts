import React, { ReactNode } from 'react';
import { BaseThemeSchema } from './base-theme-schema';
declare const useTheme: () => BaseThemeSchema;
export interface BaseThemeProps extends React.HTMLAttributes<HTMLDivElement> {
    overrides?: Partial<BaseThemeSchema>;
    children?: ReactNode;
}
export declare function BaseTheme({ children, className, ...props }: BaseThemeProps): JSX.Element;
export { useTheme };
