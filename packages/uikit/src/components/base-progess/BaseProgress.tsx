import React from "react";
import { Box, Typography } from "@mui/material";

import { Sx } from "design-system";

export type BaseProgressProps = {
  sx?: Sx;
  className?: string;
  activeTitle?: boolean;
  title: string;
  subTitle?: string;
  startBarText?: string;
  endBarText?: string;
  progressBar: JSX.Element;
};

export function BaseProgress({
  sx,
  className,
  endBarText,
  startBarText,
  subTitle,
  title,
  progressBar,
  activeTitle = false,
}: BaseProgressProps) {
  return (
    <Box sx={sx} className={className}>
      <Box
        display="grid"
        gridAutoFlow="column"
        justifyContent="flex-start"
        alignItems="center"
        gap={3}
        marginBottom={2.5}
      >
        <Typography typography="title-2" color={activeTitle ? "6" : "5"}>
          {title}
        </Typography>
        {subTitle && (
          <Typography typography="text" color="5">
            {subTitle}
          </Typography>
        )}
      </Box>
      {progressBar}
      <Box display="flex" mt={1.5}>
        {startBarText && (
          <Typography typography="caption" color="5">
            {startBarText}
          </Typography>
        )}
        {endBarText && (
          <Typography ml="auto" typography="caption" color="5">
            {endBarText}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
