import { Grid, GridProps, Theme } from "@mui/material";
import React from "react";

const COLUMNS_COUNT = 12;

export type BaseGridProps = Omit<GridProps, "item">;
export type BaseGridItemProps = GridProps &
  Partial<Record<Theme["breakpoints"]["keys"][0], number>>;
type BaseGridComponent = React.FC<BaseGridProps> & {
  Item: React.FC<BaseGridItemProps>;
};

export const BaseGrid: BaseGridComponent = (props) => {
  return (
    <Grid
      {...props}
      container
      columns={COLUMNS_COUNT}
      spacing={{
        mob: 2.5,
        desk: 3.5,
      }}
    />
  );
};

BaseGrid.Item = (props) => <Grid {...props} item />;
