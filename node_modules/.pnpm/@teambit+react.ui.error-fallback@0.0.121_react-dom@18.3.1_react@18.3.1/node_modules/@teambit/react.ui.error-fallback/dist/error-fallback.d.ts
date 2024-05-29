import { ReactNode } from 'react';
import type { FallbackProps } from 'react-error-boundary';
export declare type ErrorFallbackProps = FallbackProps & {
    className?: string;
    children?: ReactNode;
    cta?: string;
};
export declare function ErrorFallback({ resetErrorBoundary, className, children, cta, }: ErrorFallbackProps): JSX.Element;
