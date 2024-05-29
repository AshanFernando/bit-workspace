import React, { AnchorHTMLAttributes } from 'react';
import type { BaseLinkProps, LinkProps } from './link.type';
export declare type LinkPropsWithHTMLAttributes = BaseLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;
/** implementation agnostic Link component, basic on the standard `a` tag */
export declare const Link: React.FunctionComponent<LinkProps>;
