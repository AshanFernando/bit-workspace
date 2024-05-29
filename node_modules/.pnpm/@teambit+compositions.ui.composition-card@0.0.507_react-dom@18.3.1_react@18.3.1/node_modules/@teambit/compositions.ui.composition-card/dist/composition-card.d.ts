/// <reference types="react" />
import { CardProps } from '@teambit/base-ui.surfaces.card';
import { CompositionType } from '@teambit/compositions.model.composition-type';
import { ErrorFallbackProps } from '@teambit/react.ui.error-fallback';
export interface CompositionCardProps extends CardProps {
    Composition: CompositionType;
    name: string;
    link?: string;
}
export declare function CompositionCard({ Composition, name, link, className, ...rest }: CompositionCardProps): JSX.Element;
export declare function CompositionErrorFallback(props: ErrorFallbackProps): JSX.Element;
