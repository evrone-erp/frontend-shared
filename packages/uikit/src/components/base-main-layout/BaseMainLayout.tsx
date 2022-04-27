import { Box } from "@mui/material";
import React from "react";
import { LayoutContent } from "./view/LayoutContent";

export type BaseMainLayoutProps = {
  header?: JSX.Element;
};

export const BaseMainLayout: React.FC<BaseMainLayoutProps> = ({
  header,
  children,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      {header && <Box sx={{ flexShrink: 0 }}>{header}</Box>}
      <LayoutContent sx={{ flexGrow: 1 }}>{children}</LayoutContent>
    </Box>
  );
};
