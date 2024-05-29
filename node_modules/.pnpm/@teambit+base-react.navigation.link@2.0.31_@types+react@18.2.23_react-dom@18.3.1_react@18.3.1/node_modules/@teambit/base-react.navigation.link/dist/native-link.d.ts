import React, { AnchorHTMLAttributes } from 'react';
import type { BaseLinkProps, LinkProps } from './link.type';
export declare type LinkPropsWithHTMLAttributes = BaseLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;
export declare const NativeLink: React.ForwardRefExoticComponent<Omit<LinkProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
