/// <reference types="react" />
import { CompositionsModule } from '@teambit/compositions.model.composition-type';
export declare type CompositionsOverviewProps = {
    compositions?: CompositionsModule;
    compositionCardClass?: string;
};
export declare function CompositionsOverview({ compositions, compositionCardClass }: CompositionsOverviewProps): JSX.Element;
