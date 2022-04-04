import { Button } from "@mui/material";

import { bindPropsSxMerge } from "design-system";

export const AddButton = bindPropsSxMerge(Button, {
  className: "BaseFileField-addButton",
  sx: {
    typography: "text",
    textTransform: "none",
    color: "5",
    minWidth: 39,
    p: 0,
  },
});
