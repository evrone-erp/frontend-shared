import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { Sx } from "design-system";
import { StyledLink } from "./view/StyledLink";

export type BaseLinkProps = {
  sx?: Sx;
  className?: string;
  children?: ReactNode;
  noSign?: boolean;
} & Omit<LinkProps, "passHref">;

export function BaseLink({
  sx,
  className,
  children,
  noSign = false,
  ...linkProps
}: BaseLinkProps) {
  return (
    <Link passHref {...linkProps}>
      <StyledLink
        variant="text"
        sx={sx}
        className={className}
      >
        {children} {!noSign && "↗"}
      </StyledLink>
    </Link>
  );
}
