import React from "react";
import { Box, Typography } from "@mui/material";

import { mergeSx } from "design-system";
import { BaseComponentProps } from "design-system/types";

export type BasePlateHeaderProps = {
  title: string;
  subTitle?: string;
  inlineSubtitle?: boolean;
  action?: JSX.Element;
  link?: JSX.Element;
} & BaseComponentProps;

export function BasePlateHeader({
  sx,
  className,
  action,
  inlineSubtitle = false,
  link,
  subTitle,
  title,
}: BasePlateHeaderProps) {
  return (
    <Box
      display="flex"
      sx={mergeSx({ position: "relative" }, sx)}
      className={className}
    >
      <Box
        mr="auto"
        sx={[inlineSubtitle && { display: "flex", alignItems: "flex-end" }]}
      >
        <Typography
          component="div"
          color="6"
          sx={mergeSx(
            { typography: "subtitle" },
            inlineSubtitle ? { mr: 3 } : { mb: 1 }
          )}
        >
          {title}
        </Typography>
        {subTitle && (
          <Typography component="div" color="5" sx={{ typography: "text" }}>
            {subTitle}
          </Typography>
        )}
      </Box>
      {/* TODO: maybe need to combine link and action to one prop */}
      {link}
      {action && (
        <Box sx={{ position: "absolute", right: "-6px", top: "-6px" }}>
          {action}
        </Box>
      )}
    </Box>
  );
}
