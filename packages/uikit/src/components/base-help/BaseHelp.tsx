import React from "react";

import { Sx } from "design-system";

import { CloseButton } from "./view/CloseButton";
import { HelpContainer } from "./view/HelpContainer";
import { TextContent } from "./view/TextContent";
import { TitleContent } from "./view/TitleContent";

export type BaseHelpProps = {
  sx?: Sx;
  className?: string;
  title?: JSX.Element;
  text?: string;
  maxLines?: number;
  withClose?: boolean;
  onClose?: () => void;
};
export function BaseHelp({
  sx,
  className,
  title,
  onClose,
  text,
  withClose,
  maxLines = 2,
}: BaseHelpProps) {
  return (
    <HelpContainer sx={sx} className={className}>
      <TitleContent withClose={withClose}>{title}</TitleContent>
      <TextContent maxLines={maxLines}>{text}</TextContent>
      {withClose && <CloseButton onClick={onClose} />}
    </HelpContainer>
  );
}
