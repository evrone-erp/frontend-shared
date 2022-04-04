import React, { ReactNode } from "react";
import { Box } from "@mui/material";

import { ColorName, mergeSx, Sx } from "design-system";
import classNames from "classnames";

type ProgressWrapperProps = {
  sx?: Sx;
  className?: string;
  values: number[];
  background: ColorName | "transparent";
  gap: number;
  children?: ReactNode;
};

export function ProgressWrapper({
  gap,
  background,
  children,
  className,
  sx,
  values,
}: ProgressWrapperProps) {
  return (
    <Box
      sx={mergeSx(
        {
          display: "grid",
          columnGap: gap,
          backgroundColor: background,
          height: 4,
          gridTemplateColumns: values.map((v) => `${v}fr`).join(" "),
        },
        sx
      )}
      className={classNames(className, "BaseProgressBar-root")}
    >
      {children}
    </Box>
  );
}
