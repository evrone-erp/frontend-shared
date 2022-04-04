import { bindPropsSxMerge } from "design-system";
import { BaseIconButton } from "components/base-icon-button";

export const CloseButton = bindPropsSxMerge(BaseIconButton, {
  type: "close-sm",
} as const);
