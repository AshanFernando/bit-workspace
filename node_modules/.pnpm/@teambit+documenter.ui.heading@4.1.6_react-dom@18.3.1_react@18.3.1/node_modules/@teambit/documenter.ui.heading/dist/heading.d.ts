/// <reference types="react" />
import { HeadingProps } from '@teambit/base-ui.text.heading';
export declare type Sizes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export declare type HeaderProps = {
    /** font-size for the header */
    size?: Sizes;
} & HeadingProps;
/**
 * A set of concrete heading for the workspace docs.
 * H1, H2, H3, H4, H5, H6.
 *
 * To keep a consistent look to the site, headers come in a limited set of sizes.
 * While each header corresponds to a default font-size, it can be overridden using the size prop:
 */
export declare function H1(props: HeaderProps): JSX.Element;
export declare function H2(props: HeaderProps): JSX.Element;
export declare function H3(props: HeaderProps): JSX.Element;
export declare function H4(props: HeaderProps): JSX.Element;
export declare function H5(props: HeaderProps): JSX.Element;
export declare function H6(props: HeaderProps): JSX.Element;
