import React from "react";
import { Box, Typography } from "@mui/material";
import { BaseIconButton } from "components/base-icon-button";

type DrawerHeaderProps = {
  onClose: () => void;
  title: string;
};

export function DrawerHeader({ onClose, title }: DrawerHeaderProps) {
  return (
    <Box
      className="BaseDrawer-header"
      sx={{
        display: "flex",
        p: 5,
        position: "relative",
      }}
    >
      <Typography variant="subtitle" component="h2">
        {title}
      </Typography>
      <BaseIconButton
        sx={{ ml: "auto" }}
        type="close"
        size={22}
        visibleIndent={8}
        color="5"
        onClick={onClose}
      />
    </Box>
  );
}
