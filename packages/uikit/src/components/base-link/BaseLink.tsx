import { Link as MuiLink } from "@mui/material";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { mergeSx, Sx } from "design-system";

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
      <MuiLink
        variant="text"
        sx={mergeSx(
          {
            typography: "text",
            textDecoration: "none",
            cursor: "pointer",
            color: "5",
          },
          sx
        )}
        className={className}
        component="a"
      >
        {children} {!noSign && "↗"}
      </MuiLink>
    </Link>
  );
}
