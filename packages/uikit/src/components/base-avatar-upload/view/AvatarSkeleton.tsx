import { Skeleton } from "@mui/material";

import { bindPropsSxMerge } from "design-system";

export const AvatarSkeleton = bindPropsSxMerge(Skeleton, {
  sx: { position: "absolute", left: 0, top: 0 },
  className: "BaseAvatarUpload-skeleton",
  width: 120,
  height: 120,
  variant: "circular",
});
