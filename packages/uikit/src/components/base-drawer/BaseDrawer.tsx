import React, { ReactNode } from "react";
import { noop } from "lodash";

import { Sx } from "design-system";

import { StyledMuiDrawer } from "./view/StyledMuiDrawer";
import { DrawerHeader } from "./view/DrawerHeader";
import { DrawerBody } from "./view/DrawerBody";
import { DrawerFooter } from "./view/DrawerFooter";
import { ScrollBorderGradient } from "./view/ScrollBorderGradient";

export type BaseDrawerProps = {
  sx?: Sx;
  className?: string;
  children?: ReactNode;
  footer?: ReactNode;
  title: string;
  open?: boolean;
  hideTopShadow?: boolean;
  hideBottomShadow?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
};

export function BaseDrawer({
  sx,
  className,
  children,
  open = false,
  onClose = noop,
  onOpen = noop,
  title,
  footer,
  hideBottomShadow,
  hideTopShadow,
}: BaseDrawerProps) {
  return (
    <StyledMuiDrawer
      onOpen={onOpen}
      onClose={onClose}
      className={className}
      sx={sx}
      anchor="bottom"
      open={open}
    >
      <DrawerHeader title={title} onClose={onClose} />
      {!hideTopShadow && <ScrollBorderGradient variant="top" />}
      <DrawerBody>{children}</DrawerBody>
      {!hideBottomShadow && <ScrollBorderGradient variant="bottom" />}
      {footer && <DrawerFooter>{footer}</DrawerFooter>}
    </StyledMuiDrawer>
  );
}
