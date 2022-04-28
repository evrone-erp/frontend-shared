import { Grid, GridProps, Theme } from "@mui/material";
import React from "react";

const COLUMNS_COUNT = 12;

export type BaseGridProps = Omit<GridProps, "xs" | "sm" | "md" | "lg" | "xl"> &
  Partial<Record<Theme["breakpoints"]["keys"][0], number>>;

export const BaseGrid: React.FC<BaseGridProps> = (props) => (
  <Grid
    {...props}
    columns={COLUMNS_COUNT}
    spacing={{
      mob: 2.5,
      desk: 3.5,
    }}
  />
);
