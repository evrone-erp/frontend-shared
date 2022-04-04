import { Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { useBooleanState } from "@evrone-erp/react-std";
import { ExpandButton } from "./ExpandButton";
import { useElementLineHeight } from "../lib/use-element-line-height";
import { useOverflow } from "../lib/use-overflow";

type TextContentProps = { children?: ReactNode; maxLines: number };

export function TextContent({ children, maxLines }: TextContentProps) {
  const textExpanded = useBooleanState(false);
  const [lineHeight, ref] = useElementLineHeight();
  const isOverflow = useOverflow(ref);

  if (!children) return null;
  return (
    <Typography
      sx={{
        typography: "text",
        color: "5",
        overflow: "hidden",
        maxHeight:
          lineHeight && !textExpanded.is ? lineHeight * maxLines : undefined,
        position: "relative",
      }}
      ref={ref}
      component="p"
    >
      {children}
      {isOverflow && textExpanded.not && (
        <ExpandButton onClick={textExpanded.setTrue} />
      )}
    </Typography>
  );
}
