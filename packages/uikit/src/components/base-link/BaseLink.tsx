import Link, { LinkProps as NextLinkProps } from 'next/link';
import React, { ReactNode } from 'react';
import { Sx } from 'design-system';
import { StyledLink } from './view/StyledLink';

export interface BaseLinkProps extends Omit<NextLinkProps, 'passHref' | 'onMouseEnter' | 'onClick' | 'onTouchStart'> {
  sx?: Sx;
  className?: string;
  children?: ReactNode;
  noSign?: boolean;
}

export const BaseLink = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  legacyBehavior = true,
  locale,
  children,
  noSign,
  sx,
  ...other
}: BaseLinkProps) => (
  <Link
    href={href}
    prefetch={prefetch}
    as={as}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    passHref
    locale={locale}
    legacyBehavior={legacyBehavior}
  >
    <StyledLink variant="text" sx={sx} {...other}>
      {children} {!noSign && '↗'}
    </StyledLink>
  </Link>
);
