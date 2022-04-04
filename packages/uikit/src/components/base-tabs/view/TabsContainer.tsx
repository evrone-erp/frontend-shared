import { Box } from "@mui/material";
import { bindPropsSxMerge } from "design-system";

export const TabsContainer = bindPropsSxMerge(Box, {
  display: "flex",
  overflow: "hidden",
});
