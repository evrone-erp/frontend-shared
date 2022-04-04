import React from "react";
import { Sx } from "design-system";

import { StyledMuiCheckbox } from "./view/StyledMuiCheckbox";
import { StyledMuiFormControlLabel } from "./view/StyledMuiFormControlLabel";

export type BaseCheckBoxProps = {
  sx?: Sx;
  className?: string;
  label?: string;
  value?: boolean;
  onChange?: (newValue?: boolean) => void;
};
export function BaseCheckBox({
  className,
  sx,
  label = "",
  onChange,
  value,
}: BaseCheckBoxProps) {
  return (
    <StyledMuiFormControlLabel
      label={label}
      checked={value}
      sx={sx}
      className={className}
      onChange={(_: unknown, checked: boolean) => onChange?.(!checked)}
      control={<StyledMuiCheckbox size="small" />}
    />
  );
}
